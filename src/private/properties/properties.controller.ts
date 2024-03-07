import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { PropertiesService } from 'src/private/properties/properties.service';

@Controller('properties')
export class PropertiesController {
  @Get()
  getProperties() {
    return 'All properties';
  }
  // @Patch()
}
