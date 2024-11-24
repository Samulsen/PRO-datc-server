import { render, screen } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import { Flex } from "@lib-components";

describe("Flex", () => {
  it("should render without required props default config", () => {
    render(<Flex testId="flexId">FlexChild</Flex>);
    const FlexElement = screen.getByTestId("flexId");

    expect(FlexElement).toBeInTheDocument();
    expect(FlexElement).toHaveTextContent("FlexChild");
    expect(FlexElement).toHaveStyle("display: flex");
    expect(FlexElement).toHaveStyle("flex-direction: row");
    expect(FlexElement).toHaveStyle("justify-content: flex-start");
    expect(FlexElement).toHaveStyle("align-items: flex-start");
    expect(FlexElement).toHaveStyle("flex-wrap: nowrap");
    expect(FlexElement).toHaveStyle("gap: 0rem");
    expect(FlexElement).toHaveStyle("margin: 0rem");
    expect(FlexElement).toHaveStyle("padding: 0rem");
    expect(FlexElement).toHaveStyle("height: auto");
    expect(FlexElement).toHaveStyle("width: auto");
  });
  describe("when props are passed", () => {
    describe("for direction", () => {
      it("should render with direction column", () => {
        render(<Flex direction="column">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("flex-direction: column");
      });
      it("should render with direction row", () => {
        render(<Flex direction="row">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("flex-direction: row");
      });
    });
  });
});
