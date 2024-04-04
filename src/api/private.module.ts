import { Module } from "@nestjs/common";
import { TagsModule } from "src/api/tags/tags.module";
import { WordsModule } from "src/api/words/words.module";
import { ConceptsModule } from "src/api/concepts/concepts.module";

@Module({
  imports: [TagsModule, WordsModule, ConceptsModule],
})
export class PrivateModule {}
