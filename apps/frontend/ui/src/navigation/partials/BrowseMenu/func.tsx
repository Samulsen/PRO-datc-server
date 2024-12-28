import type { JSX } from "react";

import useBrowseMenuClasses from "./styles";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

type TProps = {
  currentSelection: TUiBrowseMenuOption;
  setCurrentSelection: (selection: TUiBrowseMenuOption) => void;
  optionSlot: JSX.Element;
  isExpanded: boolean;
};

export default function BrowseMenu({
  currentSelection,
  setCurrentSelection,
  optionSlot,
  isExpanded,
}: TProps): JSX.Element {
  const classes = useBrowseMenuClasses();
  return <div className={classes.root}>BrowseMenu</div>;
}
