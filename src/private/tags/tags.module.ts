import { Module } from '@nestjs/common';
import { PropertiesController } from 'src/private/tags/tags.controller';
import { PropertiesService } from 'src/private/tags/tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from 'src/private/tags/tags.schema';
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
