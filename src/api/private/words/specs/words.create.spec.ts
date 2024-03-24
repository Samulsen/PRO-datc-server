import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { WordsController } from 'src/api/private/words/words.controller';
import { WordsService } from 'src/api/private/words/words.service';
import { CreateWordDto } from 'src/api/private/words/models/words.dto';
import { Word, WordSchema } from 'src/api/private/words/models/words.schema';
import { EWordType } from 'src/api/private/words/models/words.types';

import { testUtilCreateIntegrationTestModule as createIntegrationTestModule } from 'src/utils/tests.utils';
import {
  stringUtilWasCreatedMessage as wasCreatedMessage,
  stringUtilExistsMessage as existMessage,
} from 'src/utils/strings.utils';

describe('WordsController - Create ops (e2e)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let word: mongoose.Model<Word>;
  beforeAll(async () => {
    const result = await createIntegrationTestModule(
      WordsController,
      WordsService,
      Word,
      WordSchema,
    );
    app = result.app;
    mongoServer = result.mongoServer;
    word = result.mongooseModel;
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await app.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('Creates a word with the mininimum dto payload if the word does not exist yet', async () => {
    const dto: CreateWordDto = { value: 'word1', type: EWordType.ADJECTIVE };
    const response = await request(app.getHttpServer())
      .post('/words')
      .send(dto);
    expect(response.statusCode).toBe(HttpStatus.CREATED);
    expect(response.body).toMatchObject({
      message: wasCreatedMessage('Word', dto.value),
    });
    expect((await word.findOne({ value: dto.value })).type).toEqual(dto.type);
  });

  it('Rejects a call with the minimum dto payload because the word does already exist', async () => {
    const dto: CreateWordDto = { value: 'word1', type: EWordType.ADJECTIVE };
    await request(app.getHttpServer()).post('/words').send(dto);
    const response = await request(app.getHttpServer())
      .post('/words')
      .send(dto);
    expect(response.statusCode).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toMatchObject({
      message: existMessage('Word', dto.value),
    });
    expect(await word.find({ value: dto.value })).toHaveLength(1);
  });
});
