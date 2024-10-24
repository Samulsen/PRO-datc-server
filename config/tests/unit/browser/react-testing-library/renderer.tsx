import type { ReactElement } from "react";

import { ThemeProvider } from "@lib-theme";
import { render } from "@testing-library/react";

function AllTheProviders({ children }: { children: ReactElement }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// @ts-ignore
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// override render method

export default customRender;
