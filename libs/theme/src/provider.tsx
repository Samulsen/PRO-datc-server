import type { ReactNode } from "react";

import { createTheme, MantineProvider } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

import "@mantine/core/styles.css";

const primary: MantineColorsTuple = [
  "#e1faff",
  "#cdf0ff",
  "#9fdefa",
  "#6dccf6",
  "#46bcf2",
  "#2cb2f1",
  "#17adf1",
  "#0098d7",
  "#0087c2",
  "#0075ac",
];

const theme = createTheme({
  colors: {
    primary,
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
