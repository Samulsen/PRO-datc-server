import type { JSX } from "react";

import { ChevronRightRegular, ChevronLeftRegular } from "@fluentui/react-icons";

import { Flex, Button, Tooltip } from "@lib-components";
import { LargeTitle } from "@lib-theme";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

import {
  BrowseListShard,
  BrowseToListConnectorShard,
  ListToBrowseConnectorShard,
} from "@app-ui/navigation/partials/BrowseMenu/shards";

type TProps = {
  currentSelection: TUiBrowseMenuOption;
  setCurrentSelection: (selection: TUiBrowseMenuOption) => void;
  isExpanded: boolean;
  toggleExpand: () => void;
  optionSlot: JSX.Element;
};

export default function BrowseMenu({
  optionSlot,
  currentSelection,
  isExpanded,
  setCurrentSelection,
  toggleExpand,
}: TProps): JSX.Element {
  return (
    <Flex alignItems="center" alignContent="stretch" gap="M">
      <Flex gap="M" alignItems="center">
        <LargeTitle>Browse</LargeTitle>
        <Tooltip
          content={isExpanded ? "Collapse" : "Expand"}
          relationship="label"
        >
          <Button
            icon={isExpanded ? <ChevronLeftRegular /> : <ChevronRightRegular />}
            size="small"
            onClick={toggleExpand}
          />
        </Tooltip>
      </Flex>
      <BrowseToListConnectorShard isExpanded={isExpanded} />
      {isExpanded && (
        <BrowseListShard
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
        />
      )}
      {isExpanded && (
        <ListToBrowseConnectorShard currentSelection={currentSelection} />
      )}
      <Flex>{optionSlot}</Flex>
    </Flex>
  );
}
