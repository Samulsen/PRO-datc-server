import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import { ThemeProvider } from "@theme";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
