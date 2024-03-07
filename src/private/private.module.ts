import { Module } from '@nestjs/common';
import { PropertiesModule } from 'src/private/properties/properties.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    PropertiesModule,
    RouterModule.register([
      {
        path: 'private',
        children: [
          {
            path: 'admin',
            module: PropertiesModule,
          },
        ],
      },
    ]),
  ],
})
export class PrivateModule {}
