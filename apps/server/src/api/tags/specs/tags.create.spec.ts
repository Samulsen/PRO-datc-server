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
import {
  stringUtilWasCreatedMessage as wasCreatedMessage,
  stringUtilExistsMessage as existsMessage,
} from '@server/utils/strings.utils';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from '@server/api/tags/utils/tags.string.utils';

describe('TagsController - Create ops (integration)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;
  let tag: mongoose.Model<Tag>;
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

  it('Create a single tag with a valid group', async () => {
    const tagDto: CreateTagDto = { name: 'tagOne', group: ETagsGroup.LIBRARY };
    const response = await request(app.getHttpServer())
      .post('/tags')
      .send(tagDto);
    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toEqual({
      message: wasCreatedMessage('Tag', tagDto.name),
    });
    expect((await tag.findOne({ name: tagDto.name })).group).toBe(tagDto.group);
  });

  it('Reject create call when supplied a invalid group', async () => {
    const tagDto: CreateTagDto = {
      name: 'tagOne',
      group: 'invalidGroupNameRandom' as ETagsGroup,
    };
    const response = await request(app.getHttpServer())
      .post('/tags')
      .send(tagDto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toMatchObject({
      message: [invalidGroupMessage(tagDto.group)],
    });
    expect(await tag.find({ name: tagDto.name })).toHaveLength(0);
  });

  it('Reject create call when the tag already exists', async () => {
    const tagDto: CreateTagDto = { name: 'tagOne', group: ETagsGroup.LIBRARY };
    await request(app.getHttpServer()).post('/tags').send(tagDto);
    const response = await request(app.getHttpServer())
      .post('/tags')
      .send(tagDto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toEqual({
      message: existsMessage('Tag', tagDto.name),
    });
    expect(await tag.find({ name: tagDto.name })).toHaveLength(1);
  });
});
