import { Test, TestingModule } from '@nestjs/testing';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { CreateTagDto } from 'src/private/tags/tags.schema';
import { ETagsGroup } from 'src/private/tags/tags.types';
import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Tag } from 'src/private/tags/tags.schema';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { TagSchema } from 'src/private/tags/tags.schema';

describe('TagsController (e2e)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
  });

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [
        TagsService,
        {
          provide: getModelToken(Tag.name),
          useValue: mongoose.model('Tag', TagSchema),
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('creates a tag and then fails to create the same tag', async () => {
    const dto: CreateTagDto = { name: 'tag1', group: ETagsGroup.LIBRARY };

    // Create a tag
    let response = await request(app.getHttpServer()).post('/tags').send(dto);
    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toEqual(expect.objectContaining(dto));

    // Try to create the same tag
    response = await request(app.getHttpServer()).post('/tags').send(dto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body.message).toEqual('The Tag tag1 already exists!');
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
