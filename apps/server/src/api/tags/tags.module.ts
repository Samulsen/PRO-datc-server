import { Module } from '@nestjs/common';
import { TagsController } from 'src/api/tags/tags.controller';
import { TagsService } from 'src/api/tags/tags.service';
import { MongooseModule } from '@nestjs/mongoose';
<<<<<<< HEAD:src/api/private/tags/tags.module.ts
import { Tag, TagSchema } from 'src/api/private/tags/models/tags.schema';
=======
import { Tag, TagSchema } from 'src/api/tags/models/tags.schema';
>>>>>>> development:apps/server/src/api/tags/tags.module.ts
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
