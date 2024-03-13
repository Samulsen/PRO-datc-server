import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EWordType, MWordEntry } from 'src/private/words/words.types';

@Schema()
export class MWord {
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

export type WordDocument = MWord & Document;

export const WordSchema = SchemaFactory.createForClass(MWord);
