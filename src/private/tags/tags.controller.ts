import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TagsService } from 'src/private/tags/tags.service';
import { CreateTagDto } from 'src/private/tags/tags.schema';

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

  @Get('group/:group')
  getPropertyCollection() {
    return this.tagsService.getTagGroup();
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
