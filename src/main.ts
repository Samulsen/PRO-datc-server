import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  mongoose.pluralize(null);
  const server = app.getHttpServer();
  const router = server._events.request._router;

  const availableRoutes = router.stack
    .filter((r) => r.route)
    .map((r) => {
      return {
        method: Object.keys(r.route.methods)[0].toUpperCase(),
        path: r.route.path,
      };
    });
  console.log(availableRoutes);
}
bootstrap();
