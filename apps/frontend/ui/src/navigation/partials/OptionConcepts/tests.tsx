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
    expect(onSearch).not.toHaveBeenCalled();

    // issues around here
    const concept1Radio = concept1.closest("[role='menuitemradio']");
    expect(concept1Radio).toBeInTheDocument();

    fireEvent.click(concept1Radio as HTMLElement);
    expect(searchButton).not.toBeDisabled();
    // issues around here

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("concept1");
  });
});
