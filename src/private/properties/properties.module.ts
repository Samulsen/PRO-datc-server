import { Module } from '@nestjs/common';
import { PropertiesController } from 'src/private/properties/properties.controller';
import { PropertiesService } from 'src/private/properties/properties.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Property,
  PropertySchema,
} from 'src/private/properties/properties.schema';
@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Property.name, schema: PropertySchema }],
      'dictDB',
    ),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
