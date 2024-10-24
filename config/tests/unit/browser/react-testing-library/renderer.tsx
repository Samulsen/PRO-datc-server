import type { ReactNode } from "react";

import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";

import { ThemeProvider } from "@lib-theme";

function AllTheProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export default customRender;
