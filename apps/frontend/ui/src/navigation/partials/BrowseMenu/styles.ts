import {
  makeStyles,
  tokens,
  EThemeSpacing,
  EThemeDimensions,
} from "@lib-theme";

const useBrowseMenuClasses = makeStyles({
  root: {
    height: "fit-content",
    width: "fit-content",
  },
  tabFontSize: {
    fontSize: tokens.fontSizeHero700,
  },
  tabListGap: {
    gap: EThemeSpacing.XXL,
  },
  backbone: {
    height: "100%",
    width: EThemeDimensions.XS1,
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "red",
  },
});

export default useBrowseMenuClasses;
