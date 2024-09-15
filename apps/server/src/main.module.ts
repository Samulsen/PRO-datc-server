import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppModule } from "./api/app.module";
import { ConfigModule } from "@nestjs/config";
// import * as path from "path";

export const DBConnection = {
  USER: "userDB",
  DICT: "dictDB",
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: path.resolve(`.env.${process.env.NODE_ENV}`),
    }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/users", {
      connectionName: DBConnection.USER,
    }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/dict", {
      connectionName: DBConnection.DICT,
    }),
    AppModule,
  ],
})
export class MainModule {}
