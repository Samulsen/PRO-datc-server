import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag, TagDocument } from 'src/api/private/tags/models/tags.schema';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { CreateTagDto } from 'src/api/private/tags/models/tags.dto';
import {
  stringUtilExistsMessage as existMessage,
  stringUtilWasCreatedMessage as wasCreatedMessage,
} from 'src/utils/strings.utils';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name, 'dictDB')
    private tagModel: Model<TagDocument>,
  ) {}

  async createTag(newTag: CreateTagDto) {
    const tagExists = await this.tagModel.findOne({ name: newTag.name });
    if (tagExists) {
      throw new Error(existMessage('Tag', newTag.name));
    }
    await new this.tagModel(newTag).save();
    return { message: wasCreatedMessage('Tag', newTag.name) };
  }
  async getTagGroup(group: ETagsGroup) {
    const tagGroup = await this.tagModel.find({ group });
    return tagGroup;
  }

  // updateTag() {}
  // deleteTag() {}
}
