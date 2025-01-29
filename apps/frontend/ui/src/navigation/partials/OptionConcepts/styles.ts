import { makeStyles, EThemeDimensions, tokens } from "@lib-theme";

const useOptionConceptsClasses = makeStyles({
  root: {
    width: EThemeDimensions.L8,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusLarge,
  },
  list: {
    width: "100%",
    height: EThemeDimensions.M4,
    overflow: "auto",
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
  },
});

export default useOptionConceptsClasses;
