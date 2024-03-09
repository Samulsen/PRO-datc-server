import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ETagsGroup } from 'src/private/tags/tags.types';

@Injectable()
export class ValidateGroupPipe implements PipeTransform {
  transform(value: any) {
    if (!Object.values(ETagsGroup).includes(value)) {
      throw new BadRequestException('Invalid tag group!');
    }
    return value as ETagsGroup;
  }
}
