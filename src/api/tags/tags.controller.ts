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
import { TagsService } from "src/api/tags/tags.service";
import { ValidateGroupPipe } from "src/api/tags/pipes/tags.pipe";
import { ETagsGroup } from "src/api/tags/models/tags.types";
import { CreateTagDto } from "src/api/tags/models/tags.dto";
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
    @Param("group", ValidateGroupPipe) group: ETagsGroup,
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
