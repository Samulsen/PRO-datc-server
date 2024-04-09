import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import mongoose from 'mongoose';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  mongoose.pluralize(null);
  const config = new DocumentBuilder()
    .setTitle('Dictionary of abstraction terms for code')
    .setVersion('1.0')
    .addTag('tags')
    .addTag('concepts')
    .addTag('words')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();
