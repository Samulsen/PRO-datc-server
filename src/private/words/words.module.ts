import { Module } from '@nestjs/common';
import { WordsController } from 'src/private/words/words.controller';
import { WordsService } from 'src/private/words/words.service';

@Module({
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
