import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
<<<<<<< HEAD:src/api/private/tags/tags.controller.ts
} from '@nestjs/common';
import { TagsService } from 'src/api/private/tags/tags.service';
import { ValidateGroupPipe } from 'src/api/private/tags/helpers/tags.pipes';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';
import { CreateTagDto } from 'src/api/private/tags/models/tags.dto';
@Controller('tags')
=======
  BadRequestException,
} from "@nestjs/common";
import { TagsService } from "src/api/tags/tags.service";
import { ValidateGroupPipe } from "src/api/tags/pipes/tags.pipe";
import { ETagsGroup } from "src/api/tags/models/tags.types";
import { CreateTagDto } from "src/api/tags/models/tags.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("tags")
@Controller("tags")
>>>>>>> development:apps/server/src/api/tags/tags.controller.ts
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

<<<<<<< HEAD:src/api/private/tags/tags.controller.ts
  @Get('groups/:group')
=======
  @Get("groups/:group")
>>>>>>> development:apps/server/src/api/tags/tags.controller.ts
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
