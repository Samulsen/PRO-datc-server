import { Module } from "@nestjs/common";
import { TagsController } from "@server/api/tags/tags.controller";
import { TagsService } from "@server/api/tags/tags.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Tag, TagSchema } from "@server/api/tags/models/tags.schema";
@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Tag.name, schema: TagSchema }],
      "dictDB"
    ),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
