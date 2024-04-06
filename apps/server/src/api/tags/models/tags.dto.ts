import { IsEnum, IsString } from 'class-validator';
import { ETagsGroup } from '@server/api/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from '@server/api/tags/utils/tags.string.utils';
import { ApiProperty } from '@nestjs/swagger';

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
