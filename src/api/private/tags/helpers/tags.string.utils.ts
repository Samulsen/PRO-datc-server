import { stringUtilInvalidValueMessage as invalidValueMessage } from 'src/utils/strings.utils';
import { ETagsGroup } from 'src/api/private/tags/models/tags.types';

export const tagsStringUtilsInvalidGroupMessage = () => {
  const validGroups = Object.keys(ETagsGroup).map((key) => ETagsGroup[key]);
  return invalidValueMessage('Tag', 'group', validGroups);
};
