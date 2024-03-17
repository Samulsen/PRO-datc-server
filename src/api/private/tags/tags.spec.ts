import { Test, TestingModule } from '@nestjs/testing';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { CreateTagDto } from 'src/api/private/tags/tags.schema';
import { ETagsGroup } from 'src/api/private/tags/tags.types';
import * as request from 'supertest';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Tag } from 'src/api/private/tags/tags.schema';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { TagSchema } from 'src/api/private/tags/tags.schema';

describe('TagsController (e2e)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create({
      instance: { dbName: 'dictDB' },
    });
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
  });

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TagsController],
      providers: [
        TagsService,
        {
          provide: getModelToken(Tag.name, 'dictDB'),
          useValue: mongoose.model('Tag', TagSchema),
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('Creates a single tag', async () => {
    const dto: CreateTagDto = { name: 'tag1', group: ETagsGroup.LIBRARY };
    const response = await request(app.getHttpServer()).post('/tags').send(dto);
    expect(response.status).toBe(HttpStatus.CREATED);
    const {
      message,
      tag: { name, group },
    } = response.body;
    expect({ message, name, group }).toEqual({
      message: 'Tag created',
      name: dto.name,
      group: dto.group,
    });
  });

  it('Creates a tag with an invalid group, server will refuse creation', async () => {
    const dto: CreateTagDto = { name: 'tag1', group: 'invalid' as ETagsGroup };
    const response = await request(app.getHttpServer()).post('/tags').send(dto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body.message).toEqual([
      'group must be one of the following values: Language, Tool, Framework, Domain, Pattern, Library',
    ]);
  });

  it('Creates a tag and then test if server will refuse create the same tag', async () => {
    const dto: CreateTagDto = { name: 'tag1', group: ETagsGroup.LIBRARY };

    // Create a tag
    let response = await request(app.getHttpServer()).post('/tags').send(dto);
    expect(response.status).toBe(HttpStatus.CREATED);
    const {
      message,
      tag: { name, group },
    } = response.body;
    expect({ message, name, group }).toEqual({
      message: 'Tag created',
      name: dto.name,
      group: dto.group,
    });

    // Try to create the same tag
    response = await request(app.getHttpServer()).post('/tags').send(dto);
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body.message).toEqual('The Tag -->tag1<-- already exists!');
  });

  it('Gets the tags of a group with a correct group', async () => {
    const dto: CreateTagDto = { name: 'tag1', group: ETagsGroup.LIBRARY };
    const dtoTwo: CreateTagDto = { name: 'tag2', group: ETagsGroup.LIBRARY };
    const dtoThree: CreateTagDto = { name: 'tag3', group: ETagsGroup.TOOL };

    await request(app.getHttpServer()).post('/tags').send(dto);
    await request(app.getHttpServer()).post('/tags').send(dtoTwo);
    await request(app.getHttpServer()).post('/tags').send(dtoThree);
    const responseOnLibrary = await request(app.getHttpServer()).get(
      '/tags/groups/library',
    );
    expect(responseOnLibrary.status).toBe(HttpStatus.OK);
    expect(responseOnLibrary.body.length).toEqual(2);

    const responseOnTool = await request(app.getHttpServer()).get(
      '/tags/groups/tool',
    );
    expect(responseOnTool.status).toBe(HttpStatus.OK);
    expect(responseOnTool.body.length).toEqual(1);
  });

  it('Tries to get the tags of a group with an incorrect group, server will refuse the request', async () => {
    const response = await request(app.getHttpServer()).get(
      '/tags/groups/invalid',
    );
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    expect(response.body.message).toEqual(
      'group must be one of the following values: Language, Tool, Framework, Domain, Pattern, Library (lowercased)',
    );
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
