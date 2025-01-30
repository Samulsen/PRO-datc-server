import { render, screen, fireEvent } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import OptionConcepts from "@app-ui/navigation/partials/OptionConcepts";

describe("OptionConcepts", () => {
  it("should render with given concepts", () => {
    const onSearch = jest.fn((value: string) => value);

    render(
      <OptionConcepts
        concepts={["concept1", "concept2", "concept3"]}
        onSearch={onSearch}
      />,
    );

    const menuList = screen.getByRole("menu");
    expect(menuList).toBeInTheDocument();

    const concept1 = screen.getByText("concept1");
    expect(concept1).toBeInTheDocument();
    const concept2 = screen.getByText("concept2");
    expect(concept2).toBeInTheDocument();
    const concept3 = screen.getByText("concept3");
    expect(concept3).toBeInTheDocument();
  });

  it("should be able to select different concepts", () => {
    const onSearch = jest.fn((value: string) => value);

    render(
      <OptionConcepts
        concepts={["concept1", "concept2", "concept3"]}
        onSearch={onSearch}
      />,
    );

    const concept1 = screen.getByText("concept1");
    expect(concept1).toBeInTheDocument();
    const concept2 = screen.getByText("concept2");
    expect(concept2).toBeInTheDocument();
    const concept3 = screen.getByText("concept3");
    expect(concept3).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeDisabled();

    fireEvent.click(concept1);
    expect(searchButton).toBeEnabled();

    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith("concept1");

    fireEvent.click(concept2);
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith("concept2");

    fireEvent.click(concept3);
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith("concept3");

    expect(onSearch).toHaveBeenCalledTimes(3);
  });
});
