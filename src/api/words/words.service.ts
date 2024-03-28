import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Word, WordDocument } from 'src/api/words/models/words.schema';
import {
  stringUtilExistsMessage as existMessage,
  stringUtilsNotExistsMessage as notExistMessage,
  stringUtilWasDeletedMessage as wasDeletedMessage,
  stringUtilWasCreatedMessage as wasCreatedMessage,
} from 'src/utils/strings.utils';
import { errorUtilThrowWrapper as throwWrapper } from 'src/utils/error.utils';
import { CreateWordDto, UpdateWordDto } from 'src/api/words/models/words.dto';

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
    return wordDoc;
  }

  async wordExists(word: string) {
    const wordDoc = await this.getWord(word);
    return { state: wordDoc ? true : false, doc: wordDoc };
  }

  async createWord(newWord: CreateWordDto) {
    const wordExist = await this.wordExists(newWord.value);
    const action = async () => {
      const newWordDoc = await new this.wordModel(newWord).save();
      return {
        message: wasCreatedMessage('Word', newWord.value),
        word: newWordDoc,
      };
    };
    return throwWrapper(
      {
        state: wordExist.state,
        message: existMessage('Word', newWord.value),
      },
      { action },
    );
  }

  async updateWord(update: UpdateWordDto, word: string) {
    const wordExist = await this.wordExists(word);
    const action = async () => {
      const updatedWord = await this.wordModel.findByIdAndUpdate(
        wordExist.doc,
        update,
        { new: true },
      );
      return updatedWord;
    };
    return throwWrapper(
      {
        state: !wordExist.state,
        message: notExistMessage('Word', word),
      },
      { action },
    );
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
