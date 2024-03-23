export const stringUtilExistsMessage = (group: string, target: string) => {
  return `The ${group} -->${target}<-- already exists!`;
};

export const stringUtilsNotExistsMessage = (group: string, target: string) => {
  return `The ${group} -->${target}<-- does not exist!`;
};

export const stringUtilWasDeletedMessage = (group: string, target: string) => {
  return `The ${group} -->${target}<-- was deleted!`;
};

export const stringUtilWasCreatedMessage = (group: string, target: string) => {
  return `The ${group} -->${target}<-- was created!`;
};

export const stringUtilInvalidValueMessage = (
  group: string,
  target: string,
  valid: string[],
) => {
  return `The supplied value for the type: ${group} -->${target}<-- is not a valid member! Valid members are: ${valid.join(', ')}`;
};
