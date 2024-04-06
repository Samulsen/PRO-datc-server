import { stringUtilInvalidValueMessage as invalidValueMessage } from '@server/utils/strings.utils';
import { ETagsGroup } from '@server/api/tags/models/tags.types';

export const tagsStringUtilsInvalidGroupMessage = (value: string) => {
  const validGroups = Object.keys(ETagsGroup).map((key) => ETagsGroup[key]);
  return invalidValueMessage('TagGroup', value, validGroups);
};
