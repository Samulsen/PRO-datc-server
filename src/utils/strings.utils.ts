export const stringUtilExistsMessage = (group: string, target: string) => {
  return `The ${group} -->${target}<-- already exists!`;
};

export const stringUtilsNotExistsMessage = (group: string, target: string) => {
  return `The ${group} -->${target}<-- does not exist!`;
}
