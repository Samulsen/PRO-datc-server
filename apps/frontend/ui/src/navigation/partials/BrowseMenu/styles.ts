import { makeStyles, tokens, EThemeSpacing } from "@lib-theme";

const useBrowseMenuClasses = makeStyles({
  root: {},
  tabFontSize: {
    fontSize: tokens.fontSizeHero700,
  },
  tabListGap: {
    gap: EThemeSpacing.XXL,
  },
});

export default useBrowseMenuClasses;
