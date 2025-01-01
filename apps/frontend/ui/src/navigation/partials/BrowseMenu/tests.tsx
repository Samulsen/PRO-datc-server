import { useState } from "react";
import { render, screen } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import { BrowseMenuPartial } from "@app-ui/navigation/partials";
import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

function Wrapper() {
  const optionSlot = <div>Option Slot</div>;

  const [currentSelection, setCurrentSelection] =
    useState<TUiBrowseMenuOption>("None");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <BrowseMenuPartial
      optionSlot={currentSelection === "None" ? null : optionSlot}
      currentSelection={currentSelection}
      setCurrentSelection={(self) => {
        setCurrentSelection(self);
      }}
      isExpanded={isExpanded}
      toggleExpand={() => {
        setIsExpanded((prev) => !prev);
      }}
    />
  );
}

describe("BrowseMenu", () => {
  it("should render without a selection and without any slot", () => {
    render(<Wrapper />);
    expect(screen.queryByText("Option Slot")).not.toBeInTheDocument();
  });
});
