import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  ValidationPipe,
  UsePipes,
  // HttpException,
  // HttpStatus,
} from '@nestjs/common';
import { CreateWordDto } from '@server/api/words/models/words.dto';
import { WordsService } from '@server/api/words/words.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('words')
@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() newWord: CreateWordDto) {
    return this.wordsService.createWord(newWord);
  }

  @Patch(':word')
  async update() {}

  @Delete(':word')
  async delete() {}
}
