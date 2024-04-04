import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  ValidationPipe,
  UsePipes,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { CreateWordDto } from "src/api/words/models/words.dto";
import { WordsService } from "src/api/words/words.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("words")
@Controller("words")
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() newWord: CreateWordDto) {
    try {
      return await this.wordsService.createWord(newWord);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(":word")
  async update() {}

  @Delete(":word")
  async delete() {}
}
