import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Word, WordDocument } from 'src/private/words/words.schema';
import {
  stringUtilExistsMessage as existMessage,
  stringUtilsNotExistsMessage as notExistMessage,
  stringUtilWasDeletedMessage as wasDeletedMessage,
} from 'src/utils/strings.utils';
import { CreateWordDto, UpdateWordDto } from 'src/private/words/words.dto';

@Injectable()
export class WordsService {
  constructor(
    @InjectModel(Word.name, 'dictDB')
    private wordModel: Model<WordDocument>,
  ) {}

  async getWord(word: string) {
    const wordDoc = await this.wordModel.findOne({
      value: word,
    });

    if (!wordDoc) {
      throw new Error(notExistMessage('Word', word));
    }

    return wordDoc;
  }

  async createWord(newWord: CreateWordDto) {
    const wordExists = this.getWord(newWord.value);
    if (!wordExists) {
      throw new Error(existMessage('Word', newWord.value));
    }
    const newWordDoc = await new this.wordModel(newWord).save();
    return { message: 'Word created', word: newWordDoc };
  }

  async updateWord(update: UpdateWordDto, word: string) {
    const wordDoc = this.getWord(word);
    const updatedWord = await this.wordModel.findByIdAndUpdate(
      wordDoc,
      update,
      { new: true },
    );
    return updatedWord;
  }

  async deleteWord(word: string) {
    const wordDoc = this.getWord(word);
    if (!wordDoc) {
      throw new Error(notExistMessage('Word', word));
    }
    await this.wordModel.findByIdAndDelete(wordDoc);
    return { message: wasDeletedMessage('Word', word) };
  }
}
