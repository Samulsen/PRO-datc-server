import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ValidationPipe,
} from '@nestjs/common';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';

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

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  catch(error: Error) {
    console.warn('does this run?');
    if (error instanceof BadRequestException) {
      const message = error.getResponse()['message'];
      throw new BadRequestException({ message });
    }
    throw error;
  }
}
