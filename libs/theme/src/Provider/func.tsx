import type { ReactNode } from "react";

import { FluentProvider } from "@fluentui/react-components";
import colors from "@lib-theme/Provider/colors";
import { useClasses, useStaticStyles } from "@lib-theme/Provider/styles";

import "./font-face.css";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useStaticStyles();

  const classes = useClasses();
  return (
    <FluentProvider className={classes.root} theme={colors.dark}>
      {children}
    </FluentProvider>
  );
}
