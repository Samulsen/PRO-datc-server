import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
<<<<<<<< HEAD:src/api/private/tags/models/tags.schema.ts
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
========
import { ETagsGroup } from 'src/api/tags/models/tags.types';
>>>>>>>> development:apps/server/src/api/tags/models/tags.schema.ts

@Schema()
export class Tag {
  @Prop()
  name: string;

  @Prop()
  group: ETagsGroup;
}

export type TagDocument = Tag & Document;

export const TagSchema = SchemaFactory.createForClass(Tag);
