import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { TagsModule } from 'src/private/tags/tags.module';
import { WordsModule } from 'src/private/words/words.module';

@Module({
  imports: [
    TagsModule,
    WordsModule,
    RouterModule.register([
      {
        path: 'private',
        children: [
          {
            path: 'admin',
            module: TagsModule,
            children: [
              {
                path: 'dictionary',
                module: WordsModule,
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class PrivateModule {}
