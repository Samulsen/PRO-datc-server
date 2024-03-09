import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { TagsService } from 'src/private/tags/tags.service';
import { CreateTagDto } from 'src/private/tags/tags.schema';
import { ValidateGroupPipe } from 'src/private/tags/tags.pipes';
import { ETagsGroup } from 'src/private/tags/tags.types';
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createTag(@Body() tagDto: CreateTagDto) {
    try {
      return await this.tagsService.createTag(tagDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('groups/:group')
  async getPropertyCollection(
    @Param('group', ValidateGroupPipe) group: ETagsGroup,
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
