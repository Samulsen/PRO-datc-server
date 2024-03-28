import * as request from "supertest";
import { INestApplication, HttpStatus } from "@nestjs/common";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

import { WordsController } from "src/api/words/words.controller";
import { WordsService } from "src/api/words/words.service";
import { CreateWordDto } from "src/api/words/models/words.dto";
import { Word, WordSchema } from "src/api/words/models/words.schema";
import { EWordType } from "src/api/words/models/words.types";

import { ConceptsController } from "src/api/concepts/concepts.controller";
import { ConceptsService } from "src/api/concepts/concepts.service";
import { CreateConceptDto } from "src/api/concepts/models/concepts.dto";
import {
  Concept,
  ConceptSchema,
} from "src/api/concepts/models/concepts.schema";

import { testUtilCreateIntegrationTestModule as createIntegrationTestModule } from "src/utils/tests.utils";
import {
  stringUtilWasCreatedMessage as wasCreatedMessage,
  stringUtilExistsMessage as existMessage,
  stringUtilsNotExistsMessage as notExistMessage,
} from "src/utils/strings.utils";

describe("WordsController - Create ops (e2e)", () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let word: mongoose.Model<Word>;
  beforeAll(async () => {
    const result = await createIntegrationTestModule([
      {
        controller: WordsController,
        service: WordsService,
        model: Word,
        schema: WordSchema,
      },
      {
        controller: ConceptsController,
        service: ConceptsService,
        model: Concept,
        schema: ConceptSchema,
      },
    ]);
    app = result.app;
    mongoServer = result.mongoServer;
    word = result.models[0];
  });

  beforeEach(async () => {
    const conceptDto: CreateConceptDto = { name: "concept1", icon: "icon1" };
    const conceptDto2: CreateConceptDto = { name: "concept3", icon: "icon3" };
    const combinatorDto: CreateWordDto = {
      value: "combinator1",
      type: EWordType.ADJECTIVE,
    };
    const combinatorDto2: CreateWordDto = {
      value: "combinator3",
      type: EWordType.ADJECTIVE,
    };
    const variantDto: CreateWordDto = {
      value: "variant1",
      type: EWordType.ADJECTIVE,
    };
    const variantDto2: CreateWordDto = {
      value: "variant3",
      type: EWordType.ADJECTIVE,
    };
    const synonymDto: CreateWordDto = {
      value: "synonym1",
      type: EWordType.ADJECTIVE,
    };
    const synonymDto2: CreateWordDto = {
      value: "synonym3",
      type: EWordType.ADJECTIVE,
    };
    const antagonistDto: CreateWordDto = {
      value: "antagonist1",
      type: EWordType.ADJECTIVE,
    };
    const antagonistDto2: CreateWordDto = {
      value: "antagonist3",
      type: EWordType.ADJECTIVE,
    };

    Promise.all([
      await request(app.getHttpServer()).post("/concepts").send(conceptDto),
      await request(app.getHttpServer()).post("/concepts").send(conceptDto2),
      await request(app.getHttpServer()).post("/words").send(combinatorDto),
      await request(app.getHttpServer()).post("/words").send(combinatorDto2),
      await request(app.getHttpServer()).post("/words").send(variantDto),
      await request(app.getHttpServer()).post("/words").send(variantDto2),
      await request(app.getHttpServer()).post("/words").send(synonymDto),
      await request(app.getHttpServer()).post("/words").send(synonymDto2),
      await request(app.getHttpServer()).post("/words").send(antagonistDto),
      await request(app.getHttpServer()).post("/words").send(antagonistDto2),
    ]);
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await app.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it("Creates a word with the mininimum dto payload if the word does not exist yet", async () => {});

  it("Creates a word with a full valid dto payload if the word does not exist yet", async () => {});

  it("Rejects to create a word with a full dto payload that has a wrong combinator's and type payload", async () => {});

  it("Rejects a call with a wrong concept with minimum dto payload", async () => {});

  it("Creates a word with a valid concept and minimal dto payload if the word does not exist yet", async () => {});

  it("Rejects a call with a correct and a wrong concept's dto payload", async () => {});

  it("Creates a word with multiple correct concepts' dto payload if the word does not exist yet", async () => {});

  it("Rejects a call with a wrong combinator's dto payload", async () => {});

  it("Rejects a call with a wrong a correct combinator's dto payload", async () => {});

  it("Accepts a call with two correct combinators' dto payload", async () => {});

  it("Rejects a call with a wrong variant's dto payload", async () => {});

  it("Rejects a call with a wrong synonym's dto payload", async () => {});

  it("Rejects a call with a wrong antagonist's dto payload", async () => {});

  it("Rejects a call with the minimum dto payload because the word does already exist", async () => {});
});
