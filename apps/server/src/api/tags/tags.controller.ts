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
import { TagsService } from "@server/api/tags/tags.service";
import { ValidateGroupPipe } from "@server/api/tags/pipes/tags.pipe";
import { ETagsGroup } from "@server/api/tags/models/tags.types";
import { CreateTagDto } from "@server/api/tags/models/tags.dto";
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

<<<<<<< HEAD:@server/api/private/tags/tags.controller.ts
  @Get('groups/:group')
=======
  @Get("groups/:group")
>>>>>>> development:apps/server/@server/api/tags/tags.controller.ts
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
