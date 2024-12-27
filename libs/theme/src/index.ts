import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";

import ThemeProvider from "@lib-theme/Provider";
import Logo from "@lib-theme/Logo";
import { useFuiProviderNode } from "fluentui-helpers";

export type { FluentIcon as TFluentIcon } from "@fluentui/react-icons";

export {
  EThemeDimensions,
  EThemeIconSizes,
  EThemeSpacing,
} from "fluentui-helpers";

export { ThemeProvider, Logo, useFuiProviderNode };

export { makeStyles, mergeClasses, tokens };
