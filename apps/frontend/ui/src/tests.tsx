import { render } from "@tests-unit-browser/react-testing-library";

import "@testing-library/jest-dom";

import App from "@app-admin/App";

it("renders without crashing", () => {
  render(<App />);
  expect(true).toBe(true);
});
