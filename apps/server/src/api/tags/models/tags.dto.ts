import { IsEnum, IsString } from "class-validator";
import { ETagsGroup } from './tags.types';
import { tagsStringUtilsInvalidGroupMessage } from '../utils/tags.string.utils';
import { ApiProperty } from "@nestjs/swagger";

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: ETagsGroup })
  @IsEnum(ETagsGroup, {
    message: (valArgs) => invalidGroupMessage(valArgs.value),
  })
  group: ETagsGroup;
}
