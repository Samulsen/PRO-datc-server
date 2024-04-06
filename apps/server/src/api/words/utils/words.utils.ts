import { CreateWordDto } from '@server/api/words/models/words.dto';
import { Model } from 'mongoose';
import { WordDocument } from '@server/api/words/models/words.schema';
import { stringUtilsNotExistsMessage as notExistMessage } from '@server/utils/strings.utils';
import { TStandardErrorObject as ErrorObject } from '@server/types/responses.types';

type WordModel = Model<WordDocument>;
enum WordProps {
  WORD = 'word',
  CONCEPT = 'concept',
  COMBINATOR = 'combinator',
  VARIANT = 'variant',
  SYNONYM = 'synonym',
  ANTAGONIST = 'antagonist',
}

type SuccessState = { hasError: false; errors?: never };
type ErrorState = { hasError: true; errors: ErrorObject[] };
type ResultState = SuccessState | ErrorState;

const validateWordsExistenceFromProperty = async (
  words: string[],
  property: WordProps,
  wordModel: WordModel
): Promise<ResultState> => {
  const wordsExistence = await Promise.all(
    words.map(async (word) => {
      return {
        wordDoc: wordModel.findOne({
          value: word,
        }),
        target: word,
      };
    })
  );

  const errors = wordsExistence
    .filter((word) => !word.wordDoc)
    .map(({ target }) => {
      return {
        origin: target,
        message: notExistMessage(property, target),
      };
    });

  if (errors.length > 0) {
    return { hasError: true, errors };
  } else {
    return { hasError: false };
  }
};

export const wordsUtilValidatePayloadValues = async (
  wordModel: WordModel,
  newWord: CreateWordDto
): Promise<ResultState> => {
  const { value, combinators, concepts, antagonists, variants, synonyms } =
    newWord;

  const validationPropertyList = await Promise.all([
    validateWordsExistenceFromProperty([value], WordProps.WORD, wordModel),
    validateWordsExistenceFromProperty(
      combinators,
      WordProps.COMBINATOR,
      wordModel
    ),
    validateWordsExistenceFromProperty(concepts, WordProps.CONCEPT, wordModel),
    validateWordsExistenceFromProperty(
      antagonists,
      WordProps.ANTAGONIST,
      wordModel
    ),
    validateWordsExistenceFromProperty(variants, WordProps.VARIANT, wordModel),
    validateWordsExistenceFromProperty(synonyms, WordProps.SYNONYM, wordModel),
  ]);

  const errors = validationPropertyList
    .filter((validation) => validation.hasError)
    .map((validation) => validation.errors)
    .flat();

  if (errors.length > 0) {
    return { hasError: true, errors };
  } else {
    return { hasError: false };
  }
};
