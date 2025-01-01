import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BrowseMenu from "@app-ui/navigation/partials/BrowseMenu";
import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

const meta: Meta = {
  title: "App/UI/Navigation/Partials/BrowseMenu",
  component: BrowseMenu,
  args: {
    optionSlot: <div>Option Slot</div>,
    currentSelection: "Concepts",
    setCurrentSelection: () => {},
    isExpanded: true,
  },
};

export default meta;

type Story = StoryObj<typeof BrowseMenu>;

export const Index: Story = {
  render: (props) => {
    const [currentSelection, setCurrentSelection] =
      useState<TUiBrowseMenuOption>("None");
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <BrowseMenu
        optionSlot={currentSelection === "None" ? null : props.optionSlot}
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
  },
};
