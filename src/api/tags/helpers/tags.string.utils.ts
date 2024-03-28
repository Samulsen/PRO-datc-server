import { stringUtilInvalidValueMessage as invalidValueMessage } from 'src/utils/strings.utils';
import { ETagsGroup } from 'src/api/tags/models/tags.types';

export const tagsStringUtilsInvalidGroupMessage = (value: string) => {
  const validGroups = Object.keys(ETagsGroup).map((key) => ETagsGroup[key]);
  return invalidValueMessage('TagGroup', value, validGroups);
};
