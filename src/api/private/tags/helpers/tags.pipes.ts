import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';

@Injectable()
export class ValidateGroupPipe implements PipeTransform {
  transform(value: any) {
    const upperCased = value.charAt(0).toUpperCase() + value.slice(1);
    if (!Object.values(ETagsGroup).includes(upperCased)) {
      throw new BadRequestException(
        'group must be one of the following values: Language, Tool, Framework, Domain, Pattern, Library (lowercased)',
      );
    }
    return upperCased as ETagsGroup;
  }
}
