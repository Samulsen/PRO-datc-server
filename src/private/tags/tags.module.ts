import { Module } from '@nestjs/common';
import { TagsController } from 'src/private/tags/tags.controller';
import { TagsService } from 'src/private/tags/tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from 'src/private/tags/tags.schema';
@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Tag.name, schema: TagSchema }],
      'dictDB',
    ),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
