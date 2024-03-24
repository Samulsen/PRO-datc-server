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
import { stringUtilWasCreatedMessage as wasCreatedMessage } from 'src/utils/strings.utils';
import { stringUtilExistsMessage as existsMessage } from 'src/utils/strings.utils';

describe('ConceptsController - Create ops for icons (integration)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let conceptIcon: mongoose.Model<ConceptIcon>;
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
    conceptIcon = result.models[0];
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await app.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('Creates a concept icon that does not exist', async () => {
    const iconDto = { name: 'iconOne' };
    const response = await request(app.getHttpServer())
      .post('/concepts/icons')
      .send(iconDto);
    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toMatchObject({
      message: wasCreatedMessage('ConceptIcon', iconDto.name),
    });
    expect((await conceptIcon.findOne({ name: iconDto.name })).name).toBe(
      iconDto.name,
    );
  });

  it('Rejects a create call when the concept icon already exists', async () => {
    const iconDto = { name: 'iconOne' };
    await request(app.getHttpServer()).post('/concepts/icons').send(iconDto);
    const response = await request(app.getHttpServer())
      .post('/concepts/icons')
      .send(iconDto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toMatchObject({
      message: existsMessage('ConceptIcon', iconDto.name),
    });
  });
});
