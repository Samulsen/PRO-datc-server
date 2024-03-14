import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EWordType, MWordEntry } from 'src/api/private/words/words.types';

@Schema()
export class Word {
  @Prop()
  value: string;
  @Prop()
  type: EWordType;
  @Prop()
  concepts: string[];
  @Prop()
  variants: string[];
  @Prop()
  synonyms: string[];
  @Prop()
  antagonists: string[];
  @Prop()
  entries: MWordEntry[];
}

export type WordDocument = Word & Document;

export const WordSchema = SchemaFactory.createForClass(Word);
