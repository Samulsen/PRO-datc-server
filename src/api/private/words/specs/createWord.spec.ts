import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { WordsController } from 'src/api/private/words/words.controller';
import { WordsService } from 'src/api/private/words/words.service';
import { CreateWordDto } from 'src/api/private/words/words.dto';
import { Word, WordSchema } from 'src/api/private/words/words.schema';
import { EWordType } from 'src/api/private/words/words.types';

import { testUtilCreateE2EModule as createE2ETestModule } from 'src/utils/tests.utils';
import { stringUtilWasCreatedMessage as wasCreatedMessage } from 'src/utils/strings.utils';

describe('WordsController - Create ops (e2e)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    const result = await createE2ETestModule(
      WordsController,
      WordsService,
      Word,
      WordSchema,
    );
    app = result.app;
    mongoServer = result.mongoServer;
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
      .send(dto)
      .expect(HttpStatus.CREATED);
    expect(response.body.message).toBe(wasCreatedMessage('Word', dto.value));
    expect(response.body.word.value).toBe(dto.value);
    expect(response.body.word.type).toBe(dto.type);
    expect(response.body.word.tags).toEqual([]);
    expect(response.body.word.concepts).toEqual([]);
    expect(response.body.word.antagonists).toEqual([]);
    expect(response.body.word.synonyms).toEqual([]);
    expect(response.body.word.variants).toEqual([]);
  });
});
