import { Module } from '@nestjs/common';
import { PropertiesController } from 'src/private/properties/properties.controller';
import { PropertiesService } from 'src/private/properties/properties.service';

@Module({
  providers: [PropertiesService],
  controllers: [PropertiesController],
})
export class PropertiesModule {}
