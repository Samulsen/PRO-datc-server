import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { PropertiesService } from 'src/private/properties/properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Post()
  createProperty() {
    this.propertiesService.createProperty();
    return 'Success';
  }

  @Get(':id')
  getPropertyCollection() {
    return this.propertiesService.getPropertyCollection();
  }

  @Patch(':id')
  updateProperty() {
    return this.propertiesService.updateProperty();
  }

  @Delete(':id')
  deleteProperty() {
    return this.propertiesService.deleteProperty();
  }
}
