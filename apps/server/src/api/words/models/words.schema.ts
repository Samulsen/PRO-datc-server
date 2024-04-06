import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EWordType } from '@server/api/words/models/words.types';

@Schema()
export class Word {
  @Prop()
  value: string;
  @Prop({ type: String })
  type: EWordType;
  @Prop()
  combinators: string[];
  @Prop()
  concepts: string[];
  @Prop()
  variants: string[];
  @Prop()
  synonyms: string[];
  @Prop()
  antagonists: string[];
  @Prop()
  entries: string[];
}

export type WordDocument = Word & Document;

export const WordSchema = SchemaFactory.createForClass(Word);
