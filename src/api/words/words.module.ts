import { Module } from '@nestjs/common';
import { WordsController } from 'src/api/words/words.controller';
import { WordsService } from 'src/api/words/words.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from 'src/api/words/models/words.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Word.name, schema: WordSchema }],
      'dictDB',
    ),
  ],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
