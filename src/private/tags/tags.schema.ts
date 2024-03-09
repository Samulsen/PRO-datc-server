import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ETagsGroup } from 'src/private/tags/tags.types';
import { IsEnum, IsString } from 'class-validator';

@Schema()
export class Tag {
  @Prop()
  name: string;

  @Prop()
  group: ETagsGroup;
}

export class CreateTagDto {
  @IsString()
  name: string;

  @IsEnum(ETagsGroup)
  group: ETagsGroup;
}

export type TagDocument = Tag & Document;

export const PropertySchema = SchemaFactory.createForClass(Tag);
