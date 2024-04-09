import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ETagsGroup } from '@server/api/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from '@server/api/tags/utils/tags.string.utils';

@Injectable()
export class ValidateGroupPipe implements PipeTransform {
  transform(value: any) {
    const upperCased = value.charAt(0).toUpperCase() + value.slice(1);
    if (!Object.values(ETagsGroup).includes(upperCased)) {
      throw new BadRequestException({ message: invalidGroupMessage(value) });
    }
    return upperCased as ETagsGroup;
  }
}
