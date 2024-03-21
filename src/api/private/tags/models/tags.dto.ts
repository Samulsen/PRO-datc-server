import { IsEnum, IsString } from 'class-validator';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';

export class CreateTagDto {
  @IsString()
  name: string;

  @IsEnum(ETagsGroup)
  group: ETagsGroup;
}
