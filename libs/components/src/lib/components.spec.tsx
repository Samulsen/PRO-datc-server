import { render } from "@testing-library/react";

import TestComponent from "./components";

describe("Components", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TestComponent />);
    expect(baseElement).toBeTruthy();
  });
});
