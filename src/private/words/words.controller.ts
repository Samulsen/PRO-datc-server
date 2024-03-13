import { Controller, Post } from '@nestjs/common';
import { WordsService } from 'src/private/words/words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}
  @Post()
  getHello(): string {
    return this.wordsService.getHello();
  }
}
