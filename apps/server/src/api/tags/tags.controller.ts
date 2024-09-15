import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
  BadRequestException,
} from "@nestjs/common";
import { TagsService } from './tags.service';
import { ValidateGroupPipe } from './pipes/tags.pipe';
import { ETagsGroup } from './models/tags.types';
import { CreateTagDto } from './models/tags.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags("tags")
@Controller("tags")
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createTag(@Body() tagDto: CreateTagDto) {
    try {
      return await this.tagsService.createTag(tagDto);
    } catch (error) {
      throw new BadRequestException({ message: error.message });
    }
  }

  @Get()
  async getAllTags() {
    return this.tagsService.getAllTags();
  }

  @Get("groups/:group")
  async getPropertyCollection(
    @Param("group", ValidateGroupPipe) group: ETagsGroup
  ) {
    return this.tagsService.getTagGroup(group);
  }

  // @Patch(':id')
  // updateProperty() {
  //   return this.propertiesService.deleteTag();
  // }

  // @Delete(':id')
  // deleteProperty() {
  //   return this.propertiesService.deleteTag();
  // }
}
