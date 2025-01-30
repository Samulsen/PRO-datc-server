import { render, screen, fireEvent } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import OptionConcepts from "@app-ui/navigation/partials/OptionConcepts";

describe("OptionConcepts", () => {
  it("should render with given concepts, without overflow", () => {
    const onSearch = jest.fn((value: string) => value);

    render(
      <OptionConcepts
        concepts={["concept1", "concept2", "concept3"]}
        onSearch={onSearch}
      />,
    );

    const menuList = screen.getByRole("menu");
    expect(menuList).toBeInTheDocument();
    const isScrollable = menuList.scrollHeight > menuList.clientHeight;
    expect(isScrollable).toBe(false);

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

  it("should render with given concepts, with overflow", () => {
    const onSearch = jest.fn((value: string) => value);

    render(
      <OptionConcepts
        concepts={Array.from(
          { length: 100 },
          (_, i) => `concept${i.toString()}`,
        )}
        onSearch={onSearch}
      />,
    );

    const menuList = screen.getByRole("menu");
    expect(menuList).toBeInTheDocument();
    const isScrollable = menuList.scrollHeight > menuList.clientHeight;
    expect(isScrollable).toBe(true);

    const concept1 = screen.getByText("concept1");
    expect(concept1).toBeInTheDocument();
    const concept50 = screen.getByText("concept50");
    expect(concept50).toBeInTheDocument();
    const concept100 = screen.getByText("concept99");
    expect(concept100).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeDisabled();

    fireEvent.click(concept1);
    expect(searchButton).toBeEnabled();

    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith("concept1");

    fireEvent.click(concept50);
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith("concept50");

    fireEvent.click(concept100);
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith("concept99");

    expect(onSearch).toHaveBeenCalledTimes(3);
  });
});
