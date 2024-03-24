import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { testUtilCreateIntegrationTestModule } from 'src/utils/tests.utils';
import { ConceptsController } from 'src/api/private/concepts/concepts.controller';
import { ConceptsService } from 'src/api/private/concepts/concepts.service';
import {
  ConceptIcon,
  ConceptIconSchema,
} from 'src/api/private/concepts/models/concepts.schema';

describe('TagsController - Create ops (integration)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let tag: mongoose.Model<ConceptIcon>;
  beforeAll(async () => {
    const result = await testUtilCreateIntegrationTestModule([
      {
        controller: ConceptsController,
        service: ConceptsService,
        model: ConceptIcon,
        schema: ConceptIconSchema,
      },
    ]);
    app = result.app;
    mongoServer = result.mongoServer;
    tag = result.models[0];
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await app.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('test');
});
