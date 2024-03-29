import * as request from "supertest";
import { INestApplication, HttpStatus } from "@nestjs/common";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

import { WordsController } from "src/api/words/words.controller";
import { WordsService } from "src/api/words/words.service";
import { CreateWordDto } from "src/api/words/models/words.dto";
import {
  Word,
  WordDocument,
  WordSchema,
} from "src/api/words/models/words.schema";
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

import { MFailureResponse, MSuccessResponse } from "src/types/responses.types";

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
    const wordDto: CreateWordDto = {
      value: "word1",
      type: EWordType.ADJECTIVE,
    };
    const wordDto2: CreateWordDto = {
      value: "word3",
      type: EWordType.ADJECTIVE,
    };
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
      await request(app.getHttpServer()).post("/words").send(wordDto),
      await request(app.getHttpServer()).post("/words").send(wordDto2),
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

  describe("Creates a word sucessfully", () => {
    it("when provided with the minimum payload", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
      };
      const response = await request(app.getHttpServer())
        .post("/words")
        .send(wordDto);
      expect(response.status).toBe(HttpStatus.CREATED);
      const wordDoc = await word.findOne({ value: wordDto.value });
      expect(wordDoc).toBeTruthy();
      const successResponse: MSuccessResponse<CreateWordDto, WordDocument> = {
        Input: wordDto,
        Output: wordDoc,
        Status: { Code: HttpStatus.CREATED, Message: "Created" },
        Infos: [wasCreatedMessage("Word", wordDto.value)],
      };
      expect(response.body).toEqual(successResponse);
    });
    it("when provided with additional concepts", async () => {});
    it("when provided with additional combinators", async () => {});
    it("when provided with additional variants", async () => {});
    it("when provided with additional synonyms", async () => {});
    it("when provided with additional antagonists", async () => {});
    it("when provided with the maximum payload", async () => {});
  });

  describe("Fails to create a word", () => {
    it("when provided with a wrong type", async () => {});
    it("when provided with a word that already exists", async () => {});
    it("when provided with a concept that does not exist", async () => {});
    it("when provided with two concepts from which one does not exist", async () => {});
    it("when provided with a combinator that does not exist", async () => {});
    it("when provided with two combinators from which one does not exist", async () => {});
    it("when provided with a variant that does not exist", async () => {});
    it("when provided with two variants from which one does not exist", async () => {});
    it("when provided with a synonym that does not exist", async () => {});
    it("when provided with two synonyms from which one does not exist", async () => {});
    it("when provided with an antagonist that does not exist", async () => {});
    it("when provided with two antagonists from which one does not exist", async () => {});
    it("when provided with a word that already exists and a concept that does not exist", async () => {});
    it("when provided with a valid word, valid concepts, but invalid variants and antagonists", async () => {});
    it("when provided with a valid word, two concepts from which one does not exist, and valid variants and two antagonists from which one does not exist", async () => {});
  });
});
