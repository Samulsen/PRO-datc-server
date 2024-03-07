import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivateModule } from 'src/private/private.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://mongo:27017/users', {
      dbName: 'usersDB',
    }),
    MongooseModule.forRoot('mongodb://mongo:27017/dict', { dbName: 'dictDB' }),
    PrivateModule,
  ],
})
export class AppModule {}
