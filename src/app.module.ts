import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivateModule } from 'src/api/private/private.module';

export const DBConnection = {
  USER: 'userDB',
  DICT: 'dictDB',
};
//
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/users', {
      connectionName: DBConnection.USER,
    }),
    MongooseModule.forRoot('mongodb://mongo:27017/dict', {
      connectionName: DBConnection.DICT,
    }),
    PrivateModule,
  ],
})
export class AppModule {}
