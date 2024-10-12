import type { ReactNode } from "react";

import { FluentProvider } from "@fluentui/react-components";
import colors from "@lib-theme/Provider/colors";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <FluentProvider theme={colors["light"]}>{children}</FluentProvider>;
};
