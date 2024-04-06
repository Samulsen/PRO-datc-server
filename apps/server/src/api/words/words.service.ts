import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Word, WordDocument } from "src/api/words/models/words.schema";
import { stringUtilWasCreatedMessage as wasCreatedMessage } from "src/utils/strings.utils";
import { CreateWordDto } from "src/api/words/models/words.dto";
import {
  TFailureResponse,
  TSuccessResponse,
  TStandardErrorObject,
} from "src/types/responses.types";
import { wordsUtilValidatePayloadValues as validatePayloadValues } from "src/api/words/utils/words.utils";

type SuccessResponse = TSuccessResponse<CreateWordDto, WordDocument>;
type FailureResponse = TFailureResponse<CreateWordDto, TStandardErrorObject[]>;

@Injectable()
export class WordsService {
  constructor(
    @InjectModel(Word.name, "dictDB")
    private wordModel: Model<WordDocument>,
  ) {}

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
      const newWordDoc = await (await this.wordModel.create(newWord)).save();
      return {
        Input: newWord,
        Output: newWordDoc,
        Status: { Code: HttpStatus.CREATED, Message: "Created" },
        Infos: [wasCreatedMessage("Word", newWord.value)],
      };
    }
  }

  async updateWord() {}

  async deleteWord() {}
}
