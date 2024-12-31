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
    width: EThemeDimensions.XS1,
    backgroundColor: tokens.colorNeutralStencil1,

    borderRadius: tokens.borderRadiusSmall,
    transform: "translateX(-24px)",
    position: "absolute",
    height: "100%",
  },
  betterGap: {
    gap: "63px",
  },
  connector: {
    height: EThemeDimensions.XS1,
    backgroundColor: tokens.colorNeutralStencil1,

    width: EThemeDimensions.S2,
    borderRadius: tokens.borderRadiusSmall,
  },
});

export default useBrowseMenuClasses;
