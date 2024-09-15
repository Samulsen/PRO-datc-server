import { Module } from "@nestjs/common";
import { TagsModule } from './tags/tags.module';
import { WordsModule } from './words/words.module';
import { ConceptsModule } from './concepts/concepts.module';
@Module({
  imports: [TagsModule, WordsModule, ConceptsModule],
})
export class AppModule {}
