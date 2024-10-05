import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { MainModule } from "./main.module";

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const config = new DocumentBuilder()
    .setTitle("Dictionary of abstraction terms for code")
    .setVersion("1.0")
    .addTag("tags")
    .addTag("concepts")
    .addTag("words")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  const port = process.env.SERVER_PORT ?  parseInt(process.env.SERVER_PORT) : 4444;
  await app.listen(port);
}
bootstrap();
