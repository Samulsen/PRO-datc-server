import type { JSX } from "react";

import { TabList } from "@lib-components";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

import useBrowseListClasses from "@app-ui/navigation/partials/BrowseMenu/shards/BrowseList/styles";
import { TabTemplate } from "@app-ui/navigation/partials/BrowseMenu/shards/BrowseList/templates";

type TProps = {
  currentSelection: TUiBrowseMenuOption;
  setCurrentSelection: (selection: TUiBrowseMenuOption) => void;
};

export default function BrowseList({
  currentSelection,
  setCurrentSelection,
}: TProps): JSX.Element {
  const classes = useBrowseListClasses();
  return (
    <TabList
      vertical
      size="large"
      selectedValue={currentSelection}
      className={classes.root}
    >
      <TabTemplate value="Catalogue" onClick={setCurrentSelection} />
      <TabTemplate value="Concepts" onClick={setCurrentSelection} />
      <TabTemplate value="Random" onClick={setCurrentSelection} />
      <TabTemplate value="Word" onClick={setCurrentSelection} />
      <TabTemplate value="Filter" onClick={setCurrentSelection} />
    </TabList>
  );
}
