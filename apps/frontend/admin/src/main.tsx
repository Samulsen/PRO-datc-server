import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@app-admin/App";

// NOTE: probably should have try catch in case root does not exist (unlikely)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
