import {
  Controller,
  Post,
  Patch,
  Param,
  Delete,
  Body,
  ValidationPipe,
  UsePipes,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateWordDto, UpdateWordDto } from 'src/api/words/models/words.dto';
import { WordsService } from 'src/api/words/words.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('words')
@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  // check forbidUnknownValues
  @UsePipes(ValidationPipe)
  async create(@Body() newWord: CreateWordDto) {
    //__NOTE: create wrapper utility that only expects a function
    try {
      return await this.wordsService.createWord(newWord);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':word')
  // @UsePipes(EmptyObjectPipe)
  // @UsePipes(StrictKeyCheckPipe)
  @UsePipes(ValidationPipe)
  async update(@Body() update: UpdateWordDto, @Param('word') word: string) {
    try {
      return await this.wordsService.updateWord(update, word);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':word')
  async delete(@Param('word') word: string) {
    try {
      return await this.wordsService.deleteWord(word);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
