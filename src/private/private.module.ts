import { Module } from '@nestjs/common';
import { PropertiesModule } from 'src/private/properties/properties.module';

@Module({
  imports: [PropertiesModule],
})
export class PrivateModule {}
