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
import {
  stringUtilWasCreatedMessage as wasCreatedMessage,
  stringUtilExistsMessage as existsMessage,
} from 'src/utils/strings.utils';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';

describe('TagsController - Create ops (integration)', () => {
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

  it('Create a single tag with a valid group', async () => {
    const tagDto: CreateTagDto = { name: 'tagOne', group: ETagsGroup.LIBRARY };
    const response = await request(app.getHttpServer())
      .post('/tags')
      .send(tagDto);
    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toBe({
      message: wasCreatedMessage('Tag', tagDto.name),
    });
    expect((await tag.findOne({ name: tagDto.name })).group).toBe(tagDto.group);
  });

  it('Reject create call when supplied a invalid group', async () => {
    const tagDto: CreateTagDto = { name: 'tagOne', group: 'invalid' };
    const response = await request(app.getHttpServer())
      .post('/tags')
      .send(tagDto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body).toBe({
      message: invalidGroupMessage(),
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
    expect(response.body).toBe({ message: existsMessage('Tag', tagDto.name) });
    expect(await tag.find({ name: tagDto.name })).toHaveLength(1);
  });
});
