import { stringUtilInvalidValueMessage } from '../../../utils/strings.utils';
import { ETagsGroup } from '../models/tags.types';

export const tagsStringUtilsInvalidGroupMessage = (value: string) => {
  // const validGroups = Object.keys(ETagsGroup).map((key) => ETagsGroup[key]);
  return invalidValueMessage("TagGroup", value, [
    ETagsGroup.DOMAIN,
    ETagsGroup.FRAMEWORK,
    ETagsGroup.LANGUAGE,
    ETagsGroup.LIBRARY,
    ETagsGroup.PATTERN,
    ETagsGroup.TOOL,
  ]);
};
