import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { WordsController } from 'src/api/private/words/words.controller';
import { WordsService } from 'src/api/private/words/words.service';
import { CreateWordDto } from 'src/api/private/words/words.dto';
import { Word, WordSchema } from 'src/api/private/words/words.schema';
import { testUtilCreateE2EModule as createE2ETestModule } from 'src/utils/tests.utils';

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
});
