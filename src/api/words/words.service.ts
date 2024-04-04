import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  Word,
  WordDocument,
  WordSchema,
} from "src/api/words/models/words.schema";
import {
  stringUtilExistsMessage as existMessage,
  stringUtilsNotExistsMessage as notExistMessage,
  stringUtilWasDeletedMessage as wasDeletedMessage,
  stringUtilWasCreatedMessage as wasCreatedMessage,
} from "src/utils/strings.utils";
import { errorUtilThrowWrapper as throwWrapper } from "src/utils/error.utils";
import { CreateWordDto, UpdateWordDto } from "src/api/words/models/words.dto";
import {
  TFailureResponse,
  TSuccessResponse,
  TStandardErrorObject,
} from "src/types/responses.types";
import { wordsUtilValidatePayloadValues as validatePayloadValues } from "src/api/words/utils/words.utils";

type SuccessResponse = TSuccessResponse<CreateWordDto, typeof WordSchema>;
type FailureResponse = TFailureResponse<CreateWordDto, TStandardErrorObject[]>;

@Injectable()
export class WordsService {
  constructor(
    @InjectModel(Word.name, "dictDB")
    private wordModel: Model<WordDocument>,
  ) {}

  async getSingleWord(word: string) {
    const wordDoc = await this.wordModel.findOne({
      value: word,
    });
    return wordDoc;
  }

  async wordExists(word: string) {
    const wordDoc = await this.getSingleWord(word);
    return { state: wordDoc ? true : false, doc: wordDoc };
  }

  async createWord(
    newWord: CreateWordDto,
  ): Promise<SuccessResponse | FailureResponse> {
    const validationResult = await validatePayloadValues(
      this.wordModel,
      newWord,
    );

    if (validationResult.hasError) {
      return {
        Input: newWord,
        Errors: validationResult.errors,
        Status: { Code: HttpStatus.BAD_REQUEST, Message: "Bad Request" },
      } as FailureResponse;
    } else {
      const newWordDoc = (await this.wordModel.create(newWord)).save();
      return {
        Input: newWord,
        Output: newWordDoc,
        Status: { Code: HttpStatus.CREATED, Message: "Created" },
        Infos: [wasCreatedMessage("Word", newWord.value)],
      };
    }
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
        message: notExistMessage("Word", word),
      },
      { action },
    );
  }

  async deleteWord(word: string) {
    const wordDoc = this.getSingleWord(word);
    if (!wordDoc) {
      throw new Error(notExistMessage("Word", word));
    }
    await this.wordModel.findByIdAndDelete(wordDoc);
    return { message: wasDeletedMessage("Word", word) };
  }
}
