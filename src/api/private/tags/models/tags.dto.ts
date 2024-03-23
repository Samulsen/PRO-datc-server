import { IsEnum, IsString } from 'class-validator';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';

export class CreateTagDto {
  @IsString()
  name: string;
  @IsEnum(ETagsGroup, {
    message: (valArgs) => invalidGroupMessage(valArgs.value),
  })
  group: ETagsGroup;
}
