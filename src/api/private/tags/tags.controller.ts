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
import { tagsStringUtilsInvalidGroupMessage as invalidGroupMessage } from 'src/api/private/tags/helpers/tags.string.utils';
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  //__NOTE: stopped here configuring error pipe message
  @UsePipes(new ValidationPipe({}))
  async createTag(@Body() tagDto: CreateTagDto) {
    try {
      return await this.tagsService.createTag(tagDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  //@Get("groups")

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
