import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

type TModule = {
  controller: any;
  service: any;
  model: any;
  schema: any;
};

export const testUtilCreateIntegrationTestModule = async (
  modules: TModule[],
) => {
  const mongoServer = await MongoMemoryServer.create({
    instance: { dbName: 'dictDB' },
  });
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);

  const mongooseModels = modules.map((module) => {
    return mongoose.model(module.model.name, module.schema);
  });

  const moduleRef: TestingModule = await Test.createTestingModule({
    controllers: modules.map((module) => module.controller),
    providers: [
      ...modules.map((module) => module.service),
      ...modules.map((module) => ({
        provide: getModelToken(module.model.name, 'dictDB'),
        useValue: mongoose.model(module.model.name, module.schema),
      })),
    ],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, mongoServer, models: mongooseModels };
};
