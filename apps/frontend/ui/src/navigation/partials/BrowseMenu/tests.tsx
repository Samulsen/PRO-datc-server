import { useState } from "react";
import { render, screen } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import { BrowseMenuPartial } from "@app-ui/navigation/partials";
import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

function useCustomState() {
  const optionSlot = <div>Option Slot</div>;

  const [currentSelection, setCurrentSelection] =
    useState<TUiBrowseMenuOption>("None");
  const [isExpanded, setIsExpanded] = useState(true);

  function setSelection(self: TUiBrowseMenuOption) {
    setCurrentSelection(self);
  }
  function toggleExpand() {
    setIsExpanded((prev) => !prev);
  }
  return {
    currentSelection,
    setSelection,
    isExpanded,
    toggleExpand,
    optionSlot,
  };
}

describe("BrowseMenu", () => {
  it("should render without a selection and without any slot", () => {
    const {
      currentSelection,
      setSelection,
      isExpanded,
      toggleExpand,
      optionSlot,
    } = useCustomState();

    render(
      <BrowseMenuPartial
        optionSlot={currentSelection === "None" ? null : optionSlot}
        currentSelection={currentSelection}
        setCurrentSelection={setSelection}
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
      />,
    );
    expect(screen.queryByText("Option Slot")).not.toBeInTheDocument();
  });
});
