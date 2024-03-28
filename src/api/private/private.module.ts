import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { TagsModule } from 'src/api/private/tags/tags.module';
import { WordsModule } from 'src/api/private/words/words.module';
import { ConceptsModule } from 'src/api/private/concepts/concepts.module';

@Module({
  imports: [
    TagsModule,
    WordsModule,
    ConceptsModule,
    RouterModule.register([
      {
        path: 'private',
        children: [
          {
            path: 'admin',
            children: [
              { path: '/', module: TagsModule },
              { path: '/', module: ConceptsModule },
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
