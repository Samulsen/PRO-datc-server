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

  const mongooseModel = mongoose.model(
    modules[0].model.name,
    modules[0].schema,
  );

  const moduleRef: TestingModule = await Test.createTestingModule({
    controllers: [modules[0].controller],
    providers: [
      modules[0].service,
      {
        provide: getModelToken(modules[0].model.name, 'dictDB'),
        useValue: mongooseModel,
      },
    ],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();

  return { app, mongoServer, models: [mongooseModel] };
};
