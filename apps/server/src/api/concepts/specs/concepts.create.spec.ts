import * as request from "supertest";
import { INestApplication, HttpStatus } from "@nestjs/common";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

import { testUtilCreateIntegrationTestModule } from "@server/utils/tests.utils";
import { ConceptsController } from "@server/api/concepts/concepts.controller";
import { ConceptsService } from "@server/api/concepts/concepts.service";
import {
  Concept,
  ConceptSchema,
} from "@server/api/concepts/models/concepts.schema";
import { CreateConceptDto } from "@server/api/concepts/models/concepts.dto";
import { stringUtilWasCreatedMessage as wasCreatedMessage } from "@server/utils/strings.utils";
import { stringUtilExistsMessage as existsMessage } from "@server/utils/strings.utils";

describe("ConceptsController - Create ops for concepts (integration)", () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let concept: mongoose.Model<Concept>;
  beforeAll(async () => {
    const result = await testUtilCreateIntegrationTestModule([
      {
        controller: ConceptsController,
        service: ConceptsService,
        model: Concept,
        schema: ConceptSchema,
      },
    ]);
    app = result.app;
    mongoServer = result.mongoServer;
    concept = result.models[0];
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await app.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it("Creates a concept that does not exist yet", async () => {
    const conceptDto: CreateConceptDto = { name: "concept1", icon: "icon1" };
    const response = await request
      .agent(app.getHttpServer())
      .post("/concepts")
      .send(conceptDto)
      .expect(HttpStatus.CREATED);
    expect(response.body).toMatchObject({
      message: wasCreatedMessage("Concept", conceptDto.name),
    });
    expect((await concept.findOne({ name: conceptDto.name })).icon).toEqual(
      conceptDto.icon
    );
  });

  it("Rejects creating a concept that already exists", async () => {
    const conceptDto: CreateConceptDto = { name: "concept1", icon: "icon1" };
    await concept.create(conceptDto);
    const response = await request
      .agent(app.getHttpServer())
      .post("/concepts")
      .send(conceptDto)
      .expect(HttpStatus.BAD_REQUEST);
    expect(response.body).toMatchObject({
      message: existsMessage("Concept", conceptDto.name),
    });
    expect((await concept.find({ name: conceptDto.name })).length).toEqual(1);
  });
});
