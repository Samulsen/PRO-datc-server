import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ETagsGroup } from 'src/private/tags/tags.types';

@Injectable()
export class ValidateGroupPipe implements PipeTransform {
  transform(value: any) {
    if (!Object.values(ETagsGroup).includes(value)) {
      throw new BadRequestException(
        'group must be one of the following values: Language, Tool, Framework, Domain, Pattern, Library',
      );
    }
    return value as ETagsGroup;
  }
}
