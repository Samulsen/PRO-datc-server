import { CreateWordDto } from "src/api/words/models/words.dto";
import { Model } from "mongoose";
import { WordDocument, WordSchema } from "src/api/words/models/words.schema";
import { stringUtilsNotExistsMessage as notExistMessage } from "src/utils/strings.utils";
import { MFailureResponse, MSuccessResponse } from "src/types/responses.types";

type WordModel = Model<WordDocument>;
type ErrorObject = { origin: string; message: string };
enum WordProps {
  WORD = "word",
  CONCEPT = "concept",
  COMBINATOR = "combinator",
  VARIANT = "variant",
  SYNONYM = "synonym",
  ANTAGONIST = "antagonist",
}

type SuccessResponse = MSuccessResponse<CreateWordDto, typeof WordSchema>;
type FailureResponse = MFailureResponse<CreateWordDto, ErrorObject>;

const validateWordsExistenceFromProperty = async (
  words: string[],
  property: WordProps,
  wordModel: WordModel,
): Promise<{
  property: WordProps;
  hasErrors: boolean;
  errors?: ErrorObject[];
}> => {
  const wordsExistence = await Promise.all(
    words.map(async (word) => {
      return {
        wordDoc: wordModel.findOne({
          value: word,
        }),
        target: word,
      };
    }),
  );

  const errors = wordsExistence
    .filter((word) => !word.wordDoc)
    .map(({ target }) => {
      return {
        origin: target,
        message: notExistMessage(property, target),
      };
    });

  return {
    property: property,
    hasErrors: errors.length > 0,
    errors: errors.length > 0 ? errors : undefined,
  };
};

export const wordsUtilValidatePayloadValues = async (
  wordModel: WordModel,
  newWord: CreateWordDto,
): Promise<SuccessResponse | FailureResponse> => {
  const { value, combinators, concepts, antagonists, variants, synonyms } =
    newWord;

  const validateAllProperties = await Promise.all([
    validateWordsExistenceFromProperty([value], WordProps.WORD, wordModel),
    validateWordsExistenceFromProperty(
      combinators,
      WordProps.COMBINATOR,
      wordModel,
    ),
    validateWordsExistenceFromProperty(concepts, WordProps.CONCEPT, wordModel),
    validateWordsExistenceFromProperty(
      antagonists,
      WordProps.ANTAGONIST,
      wordModel,
    ),
    validateWordsExistenceFromProperty(variants, WordProps.VARIANT, wordModel),
    validateWordsExistenceFromProperty(synonyms, WordProps.SYNONYM, wordModel),
  ]);

  const errors = validateAllProperties
    .filter((validationObject) => validationObject.hasErrors)
    .map((validationObject) => validationObject.errors);

  if (errors.length > 0) {
    // return {Input: newWord, Output:}; //
  }
};
