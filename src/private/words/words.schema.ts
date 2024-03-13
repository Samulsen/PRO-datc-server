import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEnum, IsString } from 'class-validator';
import { EWordType, MWordEntry } from 'src/private/words/words.types';

@Schema()
export class Word {
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

export class CreateWordDto {
  @IsEnum(EWordType)
  type: EWordType;
  @IsString({ each: true })
  concepts: string[];
  @IsString({ each: true })
  variants: string[];
  @IsString({ each: true })
  synonyms: string[];
  @IsString({ each: true })
  antagonists: string[];
}

export type WordDocument = Word & Document;

export const WordSchema = SchemaFactory.createForClass(Word);
