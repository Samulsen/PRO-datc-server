import { Module } from '@nestjs/common';
import { WordsController } from 'src/private/words/words.controller';
import { WordsService } from 'src/private/words/words.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Word, WordSchema } from 'src/private/words/words.schema';

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
