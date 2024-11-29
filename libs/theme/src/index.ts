import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

import ThemeProvider from "@lib-theme/Provider";
import Logo from "@lib-theme/Logo";
import { useFuiProviderNode } from "@lib-theme/hooks";

export type { FluentIcon as TFluentIcon } from "@fluentui/react-icons";

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

export { ThemeProvider, Logo, useFuiProviderNode };

export { makeStyles, mergeClasses, tokens };
