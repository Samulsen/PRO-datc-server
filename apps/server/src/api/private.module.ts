import { Module } from '@nestjs/common';
import { TagsModule } from '@server/api/tags/tags.module';
import { WordsModule } from '@server/api/words/words.module';
import { ConceptsModule } from '@server/api/concepts/concepts.module';
@Module({
  imports: [TagsModule, WordsModule, ConceptsModule],
})
export class PrivateModule {}
