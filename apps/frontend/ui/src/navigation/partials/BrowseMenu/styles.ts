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
    transform: "translateX(-32px)",
    backgroundColor: tokens.colorNeutralStencil1,
    position: "absolute",
  },
  betterGap: {
    gap: "63px",
  },
  connector: {
    width: EThemeDimensions.S4,
    height: EThemeDimensions.XS1,
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralStencil1,
  },
});

export default useBrowseMenuClasses;
