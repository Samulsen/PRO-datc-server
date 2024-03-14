import { UpdateWordDto } from 'src/api/private/words/words.dto';
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EmptyObjectPipe implements PipeTransform {
  transform(value: UpdateWordDto): UpdateWordDto {
    if (Object.keys(value).length === 0) {
      throw new BadRequestException('UpdateWordDto cannot be an empty object');
    }
    return value;
  }
}

@Injectable()
export class StrictKeyCheckPipe implements PipeTransform {
  transform(value: any) {
    const foreignKeys = Object.keys(value);
    console.log(value);
    const allowedKeys = [
      'concepts',
      'variants',
      'synonyms',
      'antagonists',
      'type',
    ];
    for (const key of foreignKeys) {
      if (!allowedKeys.includes(value[key])) {
        throw new BadRequestException(
          `Invalid property: ${value[key]} Only ${allowedKeys} are allowed.`,
        );
      }
    }
    return value;
  }
}
