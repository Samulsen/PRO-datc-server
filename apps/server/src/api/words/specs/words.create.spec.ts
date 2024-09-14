import * as request from "supertest";
import { INestApplication, HttpStatus } from "@nestjs/common";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

import { WordsController } from "@server/api/words/words.controller";
import { WordsService } from "@server/api/words/words.service";
import { CreateWordDto } from "@server/api/words/models/words.dto";
import { Word, WordSchema } from "@server/api/words/models/words.schema";
import { EWordType } from "@server/api/words/models/words.types";

import { ConceptsController } from "@server/api/concepts/concepts.controller";
import { ConceptsService } from "@server/api/concepts/concepts.service";
import { CreateConceptDto } from "@server/api/concepts/models/concepts.dto";
import {
  Concept,
  ConceptSchema,
} from "@server/api/concepts/models/concepts.schema";

import { testUtilCreateIntegrationTestModule as createIntegrationTestModule } from "@server/utils/tests.utils";
import {
  stringUtilWasCreatedMessage as wasCreatedMessage,
  stringUtilExistsMessage as existMessage,
  stringUtilsNotExistsMessage as notExistMessage,
  stringUtilInvalidValueMessage as invalidValueMessage,
} from "@server/utils/strings.utils";

import {
  TFailureResponse,
  TSuccessResponse,
} from "@server/types/responses.types";

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
      await request.agent(app.getHttpServer()).post("/words").send(wordDto),
      await request.agent(app.getHttpServer()).post("/words").send(wordDto2),
      await request
        .agent(app.getHttpServer())
        .post("/concepts")
        .send(conceptDto),
      await request
        .agent(app.getHttpServer())
        .post("/concepts")
        .send(conceptDto2),
      await request
        .agent(app.getHttpServer())
        .post("/words")
        .send(combinatorDto),
      await request
        .agent(app.getHttpServer())
        .post("/words")
        .send(combinatorDto2),
      await request.agent(app.getHttpServer()).post("/words").send(variantDto),
      await request.agent(app.getHttpServer()).post("/words").send(variantDto2),
      await request.agent(app.getHttpServer()).post("/words").send(synonymDto),
      await request.agent(app.getHttpServer()).post("/words").send(synonymDto2),
      await request
        .agent(app.getHttpServer())
        .post("/words")
        .send(antagonistDto),
      await request
        .agent(app.getHttpServer())
        .post("/words")
        .send(antagonistDto2),
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

  const successBoilerplate = async (wordDto: CreateWordDto) => {
    const response = await request
      .agent(app.getHttpServer())
      .post("/words")
      .send(wordDto);
    expect(response.status).toBe(HttpStatus.CREATED);
    const wordDoc = await word.findOne({ value: wordDto.value });
    expect(wordDoc).toBeTruthy();
    type SuccessResponse = TSuccessResponse<CreateWordDto, typeof WordSchema>;
    const successResponse: SuccessResponse = {
      Input: wordDto,
      Output: wordDoc.toObject(),
      Status: { Code: HttpStatus.CREATED, Message: "Created" },
      Infos: [wasCreatedMessage("Word", wordDto.value)],
    };
    expect(response.body).toEqual<SuccessResponse>(successResponse);
  };

  const failureBoilerplate = async (
    wordDto: CreateWordDto,
    errors: { origin: string; message: string }[]
  ) => {
    const response = await request
      .agent(app.getHttpServer())
      .post("/words")
      .send(wordDto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    const wordDoc = await word.findOne({ value: wordDto.value });
    expect(wordDoc).toBeFalsy();
    type FailureResponse = TFailureResponse<CreateWordDto, typeof errors>;
    const failureResponse: FailureResponse = {
      Input: wordDto,
      Errors: errors,
      Status: { Code: HttpStatus.BAD_REQUEST, Message: "Bad Request" },
    };
    expect(response.body).toEqual<FailureResponse>(failureResponse);
  };

  describe("Creates a word sucessfully", () => {
    it("when provided with the minimum payload", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
      };
      await successBoilerplate(wordDto);
    });
    it("when provided with additional concepts", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        concepts: ["concept1", "concept3"],
      };
      await successBoilerplate(wordDto);
    });
    it("when provided with additional combinators", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        combinators: ["combinator1", "combinator3"],
      };
      await successBoilerplate(wordDto);
    });
    it("when provided with additional variants", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        variants: ["variant1", "variant3"],
      };
      await successBoilerplate(wordDto);
    });
    it("when provided with additional synonyms", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        synonyms: ["synonym1", "synonym3"],
      };
      await successBoilerplate(wordDto);
    });
    it("when provided with additional antagonists", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        antagonists: ["antagonist1", "antagonist3"],
      };
      await successBoilerplate(wordDto);
    });
    it("when provided with the maximum payload", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        concepts: ["concept1", "concept3"],
        combinators: ["combinator1", "combinator3"],
        variants: ["variant1", "variant3"],
        synonyms: ["synonym1", "synonym3"],
        antagonists: ["antagonist1", "antagonist3"],
      };
      await successBoilerplate(wordDto);
    });
  });

  describe("Fails to create a word", () => {
    it("when provided with a wrong type", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: "WRONG" as EWordType,
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "type",
          message: invalidValueMessage("Type", wordDto.type, [
            EWordType.ADJECTIVE,
            EWordType.NOUN,
            EWordType.VERB,
          ]),
        },
      ]);
    });
    it("when provided with a word that already exists", async () => {
      const wordDto: CreateWordDto = {
        value: "word1",
        type: EWordType.ADJECTIVE,
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "value",
          message: existMessage("Word", wordDto.value),
        },
      ]);
    });
    it("when provided with a concept that does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        concepts: ["concept2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "concepts",
          message: notExistMessage("Concept", "concept2"),
        },
      ]);
    });
    it("when provided with two concepts from which one does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        concepts: ["concept1", "concept2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "concepts",
          message: notExistMessage("Concept", "concept2"),
        },
      ]);
    });
    it("when provided with a combinator that does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        combinators: ["combinator2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "combinators",
          message: notExistMessage("Word", "combinator2"),
        },
      ]);
    });
    it("when provided with two combinators from which one does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        combinators: ["combinator1", "combinator2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "combinators",
          message: notExistMessage("Word", "combinator2"),
        },
      ]);
    });
    it("when provided with a variant that does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        variants: ["variant2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "variants",
          message: notExistMessage("Word", "variant2"),
        },
      ]);
    });
    it("when provided with two variants from which one does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        variants: ["variant1", "variant2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "variants",
          message: notExistMessage("Word", "variant2"),
        },
      ]);
    });
    it("when provided with a synonym that does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        synonyms: ["synonym2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "synonyms",
          message: notExistMessage("Word", "synonym2"),
        },
      ]);
    });
    it("when provided with two synonyms from which one does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        synonyms: ["synonym1", "synonym2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "synonyms",
          message: notExistMessage("Word", "synonym2"),
        },
      ]);
    });
    it("when provided with an antagonist that does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        antagonists: ["antagonist2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "antagonists",
          message: notExistMessage("Word", "antagonist2"),
        },
      ]);
    });
    it("when provided with two antagonists from which one does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        antagonists: ["antagonist1", "antagonist2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "antagonists",
          message: notExistMessage("Word", "antagonist2"),
        },
      ]);
    });
    it("when provided with a word that already exists and a concept that does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word1",
        type: EWordType.ADJECTIVE,
        concepts: ["concept2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "value",
          message: existMessage("Word", wordDto.value),
        },
        {
          origin: "concepts",
          message: notExistMessage("Concept", "concept2"),
        },
      ]);
    });
    it("when provided with a valid word, valid concepts, but invalid variants and antagonists", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        concepts: ["concept1", "concept3"],
        variants: ["variant2", "variant4"],
        antagonists: ["antagonist2", "antagonist4"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "variants",
          message: notExistMessage("Word", "variant2"),
        },
        {
          origin: "variants",
          message: notExistMessage("Word", "variant4"),
        },
        {
          origin: "antagonists",
          message: notExistMessage("Word", "antagonist2"),
        },
        {
          origin: "antagonists",
          message: notExistMessage("Word", "antagonist4"),
        },
      ]);
    });
    it("when provided with a valid word, two concepts from which one does not exist, and valid variants and two antagonists from which one does not exist", async () => {
      const wordDto: CreateWordDto = {
        value: "word2",
        type: EWordType.ADJECTIVE,
        concepts: ["concept1", "concept2"],
        variants: ["variant1", "variant3"],
        antagonists: ["antagonist1", "antagonist2"],
      };

      await failureBoilerplate(wordDto, [
        {
          origin: "concepts",
          message: notExistMessage("Concept", "concept2"),
        },
        {
          origin: "antagonists",
          message: notExistMessage("Word", "antagonist2"),
        },
      ]);
    });
  });
});
