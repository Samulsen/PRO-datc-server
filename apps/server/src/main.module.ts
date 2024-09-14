import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppModule } from "@server/api/app.module";
import { ConfigModule } from "@nestjs/config";
import * as path from "path";

export const DBConnection = {
  USER: "userDB",
  DICT: "dictDB",
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(`.env.${process.env.NODE_ENV}`),
    }),
    MongooseModule.forRoot(`mongodb://admin.dev:dev1234@localhost:27017/user`, {
      connectionName: DBConnection.USER,
    }),
    MongooseModule.forRoot(`mongodb://admin.dev:dev1234@localhost:27017/dict`, {
      connectionName: DBConnection.DICT,
    }),
    AppModule,
  ],
})
export class MainModule {}
