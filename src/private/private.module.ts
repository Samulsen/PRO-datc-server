import { Module } from '@nestjs/common';
import { TagsModule } from 'src/private/tags/tags.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    TagsModule,
    RouterModule.register([
      {
        path: 'private',
        children: [
          {
            path: 'admin',
            module: TagsModule,
          },
        ],
      },
    ]),
  ],
})
export class PrivateModule {}
