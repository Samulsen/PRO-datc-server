import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { TagsService } from 'src/private/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private propertiesService: TagsService) {}

  @Post()
  createTag() {
    return this.propertiesService.createTag();
  }

  @Get('group/:group')
  getPropertyCollection() {
    return this.propertiesService.getTagGroup();
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
