import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertyDocument = Property & Document;

@Schema()
export class Property {
  @Prop()
  name: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
