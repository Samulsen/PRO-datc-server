import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { testUtilCreateIntegrationTestModule } from '@server/utils/tests.utils';
import { TagsController } from '@server/api/tags/tags.controller';
import { TagsService } from '@server/api/tags/tags.service';
import { Tag, TagSchema } from '@server/api/tags/models/tags.schema';
import { CreateTagDto } from '@server/api/tags/models/tags.dto';
import { ETagsGroup } from '@server/api/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from '@server/api/tags/utils/tags.string.utils';

describe('TagsController - Get ops (integration)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  beforeAll(async () => {
    const result = await testUtilCreateIntegrationTestModule([
      {
        controller: TagsController,
        service: TagsService,
        model: Tag,
        schema: TagSchema,
      },
    ]);
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
    const response = await request(app.getHttpServer()).get('/tags');
    expect(response.body).toEqual(
      expect.arrayContaining([
        { name: 'tag1', group: ETagsGroup.PATTERN },
        { name: 'tag2', group: ETagsGroup.LIBRARY },
        { name: 'tag3', group: ETagsGroup.TOOL },
      ])
    );
  });

  it('Get tags of a valid group', async () => {
    const response = await request(app.getHttpServer()).get(
      '/tags/groups/pattern'
    );
    expect(response.statusCode).toBe(HttpStatus.OK);
    expect(response.body).toEqual([
      { name: 'tag1', group: ETagsGroup.PATTERN },
    ]);
  });

  it('Refuses to get tags of an invalid group', async () => {
    const response = await request(app.getHttpServer()).get(
      '/tags/groups/invalid'
    );
    expect(response.statusCode).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual({
      message: invalidGroupMessage('invalid'),
    });
  });
});
