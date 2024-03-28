import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Concept {
  @Prop()
  name: string;
  @Prop()
  icon: string;
}

export type ConceptDocument = Concept & Document;

export const ConceptSchema = SchemaFactory.createForClass(Concept);
