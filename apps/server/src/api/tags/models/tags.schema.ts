import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ETagsGroup } from '@server/api/tags/models/tags.types';

@Schema()
export class Tag {
  @Prop()
  name: string;

  @Prop({ type: String })
  group: ETagsGroup;
}

export type TagDocument = Tag & Document;

export const TagSchema = SchemaFactory.createForClass(Tag);
