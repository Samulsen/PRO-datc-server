import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const testUtilCreateE2EModule = async (
  controller: any,
  service: any,
  model: any,
  schema: any,
) => {
  const mongoServer = await MongoMemoryServer.create({
    instance: { dbName: 'dictDB' },
  });
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);

  const moduleRef: TestingModule = await Test.createTestingModule({
    controllers: [controller],
    providers: [
      service,
      {
        provide: getModelToken(model.name, 'dictDB'),
        useValue: mongoose.model('Word', schema),
      },
    ],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, mongoServer };
};
