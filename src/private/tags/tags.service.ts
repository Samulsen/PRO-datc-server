import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag, TagDocument } from 'src/private/tags/tags.schema';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name, 'dictDB')
    private propertyModel: Model<TagDocument>,
  ) {}

  createTag() {}
  getTagGroup() {
    return 'myString';
  }

  //__NOTE: currently not implementable
  updateTag() {}
  deleteTag() {}
}
