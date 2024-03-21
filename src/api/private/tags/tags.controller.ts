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
import { TagsService } from 'src/api/private/tags/tags.service';
import { ValidateGroupPipe } from 'src/api/private/tags/helpers/tags.pipes';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { CreateTagDto } from 'src/api/private/tags/models/tags.dto';
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
