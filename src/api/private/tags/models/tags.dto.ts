import { IsEnum, IsString } from 'class-validator';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';

export class CreateTagDto {
  @IsString()
  name: string;
  ////__NOTE: check here
  @IsEnum(ETagsGroup, { message: invalidGroupMessage.bind(null) })
  group: ETagsGroup;
}
