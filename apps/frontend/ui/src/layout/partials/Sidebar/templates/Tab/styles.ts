import { makeStyles, EThemeDimensions, tokens } from "@lib-theme";

const useTabsClasses = makeStyles({
  root: {},
  dot: {
    width: "6px",
    height: "6px",
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    borderRadius: tokens.borderRadiusCircular,
    marginRight: tokens.spacingHorizontalXXS,
  },
});

export default useTabsClasses;
