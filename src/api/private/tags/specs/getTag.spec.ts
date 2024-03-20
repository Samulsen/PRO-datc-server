import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { testUtilCreateIntegrationTestModule } from 'src/utils/tests.utils';
import { TagsController } from 'src/api/private/tags/tags.controller';
import { TagsService } from 'src/api/private/tags/tags.service';
import { Tag, TagSchema } from 'src/api/private/tags/models/tags.schema';
import { CreateTagDto } from 'src/api/private/tags/models/tags.dto';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';

describe('TagsController - Get ops (integration)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let tag: mongoose.Model<Tag>;
  beforeAll(async () => {
    const result = await testUtilCreateIntegrationTestModule(
      TagsController,
      TagsService,
      Tag,
      TagSchema,
    );
    app = result.app;
    mongoServer = result.mongoServer;
    tag = result.mongooseModel;
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await app.close();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    const dto: CreateTagDto = { name: 'tag1', group: ETagsGroup.PATTERN };
    const dtoTwo: CreateTagDto = { name: 'tag2', group: ETagsGroup.LIBRARY };
    const dtoThree: CreateTagDto = { name: 'tag3', group: ETagsGroup.TOOL };
    Promise.all([
      request(app.getHttpServer()).post('/tags').send(dto),
      request(app.getHttpServer()).post('/tags').send(dtoTwo),
      request(app.getHttpServer()).post('/tags').send(dtoThree),
    ]);
  });

  it('Get the entire tags list', async () => {
    const response = await request(app.getHttpServer()).get('/tags/groups');
    expect(response.body).toBe([
      { name: 'tag1', group: ETagsGroup.PATTERN },
      { name: 'tag2', group: ETagsGroup.LIBRARY },
      { name: 'tag3', group: ETagsGroup.TOOL },
    ]);
  });

  it('Get tags of a valid group', async () => {
    const response = await request(app.getHttpServer()).get(
      `/tags/group/${ETagsGroup.PATTERN}`,
    );
    expect(response.statusCode).toBe(HttpStatus.OK);
    expect(response.body).toBe([{ name: 'tag1', group: ETagsGroup.PATTERN }]);
  });

  it('Refuses to get tags of an invalid group', async () => {
    const response = await request(app.getHttpServer()).get(
      '/tags/group/invalid',
    );
    expect(response.statusCode).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toBe({
      message: invalidGroupMessage(),
    });
  });
});
