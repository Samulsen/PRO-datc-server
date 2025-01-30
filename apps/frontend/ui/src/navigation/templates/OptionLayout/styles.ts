import { makeStyles, tokens, EThemeDimensions } from "@lib-theme";

const useOptionLayoutClasses = makeStyles({
  root: {
    width: EThemeDimensions.L8,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusLarge,
  },
});

export default useOptionLayoutClasses;
