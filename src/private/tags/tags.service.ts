import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag, TagDocument, CreateTagDto } from 'src/private/tags/tags.schema';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name, 'dictDB')
    private tagModel: Model<TagDocument>,
  ) {}

  async createTag(newTag: CreateTagDto) {
    const tagExists = await this.tagModel.findOne({ name: newTag.name });

    if (tagExists) {
      throw new Error(`The Tag -->${newTag.name}<-- already exists!`);
    }

    const newTagDoc = await new this.tagModel(newTag).save();
    return { message: 'Tag created', tag: newTagDoc };
  }
  getTagGroup() {
    return 'myString';
  }

  // updateTag() {}
  // deleteTag() {}
}
