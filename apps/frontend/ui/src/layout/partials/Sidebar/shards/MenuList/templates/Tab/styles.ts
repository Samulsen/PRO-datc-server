import { makeStyles, EThemeDimensions, tokens } from "@lib-theme";

const useTabsClasses = makeStyles({
  root: {
    marginRight: tokens.spacingHorizontalM,
  },
  dot: {
    width: EThemeDimensions.XS1,
    height: EThemeDimensions.XS1,
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    borderRadius: tokens.borderRadiusCircular,
    marginRight: tokens.spacingHorizontalXXS,
  },
});

export default useTabsClasses;
