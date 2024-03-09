import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ETagsGroup } from 'src/private/tags/tags.types';

@Schema()
export class Property {
  @Prop()
  name: string;

  @Prop()
  group: ETagsGroup;
}

export type PropertyDocument = Property & Document;

export const PropertySchema = SchemaFactory.createForClass(Property);
