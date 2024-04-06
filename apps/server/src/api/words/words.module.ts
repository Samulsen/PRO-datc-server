import { Module } from '@nestjs/common';
import { WordsController } from '@server/api/words/words.controller';
import { WordsService } from '@server/api/words/words.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from '@server/api/words/models/words.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Word.name, schema: WordSchema }],
      'dictDB'
    ),
  ],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
