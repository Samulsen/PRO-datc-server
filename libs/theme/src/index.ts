import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

import ThemeProvider from "@lib-theme/Provider";
import Logo from "@lib-theme/Logo";

export {
  EThemeDimensions,
  EThemeIconSizes,
  EThemeSpacing,
} from "@lib-theme/tokens";

export type {
  TThemeSpacing,
  TThemeShorthand,
  TThemeShorthandSpacing,
} from "@lib-theme/types";

export { ThemeProvider, Logo };

export { makeStyles, mergeClasses, tokens };
