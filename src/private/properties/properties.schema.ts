import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PropertyDocument = Property & Document;

@Schema()
export class Property {
  @Prop()
  name: string;

  // Add more properties as needed
}

export const PropertySchema = SchemaFactory.createForClass(Property);
