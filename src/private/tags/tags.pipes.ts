import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ETagsGroup } from 'src/private/tags/tags.types';

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
