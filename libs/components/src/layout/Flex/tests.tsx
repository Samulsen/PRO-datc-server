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
    describe("for justifyContent", () => {
      it("should render with justifyContent center", () => {
        render(<Flex justifyContent="center">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: center");
      });
      it("should render with justifyContent end", () => {
        render(<Flex justifyContent="end">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: flex-end");
      });
      it("should render with justifyContent spaceBetween", () => {
        render(<Flex justifyContent="spaceBetween">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: space-between");
      });
      it("should render with justifyContent spaceAround", () => {
        render(<Flex justifyContent="spaceAround">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: space-around");
      });
      it("should render with justifyContent spaceEvenly", () => {
        render(<Flex justifyContent="spaceEvenly">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: space-evenly");
      });
      it("should render with justifyContent stretch", () => {
        render(<Flex justifyContent="stretch">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: stretch");
      });
    });
    describe("for alignItems", () => {
      it("should render with alignItems center", () => {
        render(<Flex alignItems="center">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: center");
      });
      it("should render with alignItems end", () => {
        render(<Flex alignItems="end">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: flex-end");
      });
      it("should render with alignItems spaceBetween", () => {
        render(<Flex alignItems="spaceBetween">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: space-between");
      });
      it("should render with alignItems spaceAround", () => {
        render(<Flex alignItems="spaceAround">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: space-around");
      });
      it("should render with alignItems spaceEvenly", () => {
        render(<Flex alignItems="spaceEvenly">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: space-evenly");
      });
      it("should render with alignItems stretch", () => {
        render(<Flex alignItems="stretch">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: stretch");
      });
    });
  });
});
