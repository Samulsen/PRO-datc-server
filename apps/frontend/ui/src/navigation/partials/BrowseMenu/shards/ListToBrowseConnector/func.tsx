import type { JSX } from "react";

import { Flex } from "@lib-components";
import { mergeClasses } from "@lib-theme";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

import { useDirectConnectorClass } from "@app-ui/navigation/partials/BrowseMenu/shards/ListToBrowseConnector/hooks";

import useListToBrowseConnectorClasses from "@app-ui/navigation/partials/BrowseMenu/shards/ListToBrowseConnector/styles";

type TProps = {
  currentSelection: TUiBrowseMenuOption;
};

export default function ListToBrowseConnector({
  currentSelection,
}: TProps): JSX.Element {
  const classes = useListToBrowseConnectorClasses();
  const createFinalClass = useDirectConnectorClass(
    classes.connectorHorizontalBase,
    classes.activeLine,
  );
  return (
    <Flex>
      <Flex
        direction="column"
        alignItems="end"
        className={classes.connectorContainer}
      >
        <div
          className={createFinalClass(
            currentSelection === "Catalogue",
            classes.connectorCatalogue,
          )}
        />
        <div
          className={createFinalClass(
            currentSelection === "Concepts",
            classes.connectorConcepts,
          )}
        />
        <div
          className={createFinalClass(
            currentSelection === "Random",
            classes.connectorRandom,
          )}
        />
        <div
          className={createFinalClass(
            currentSelection === "Word",
            classes.connectorWord,
          )}
        />
        <div
          className={createFinalClass(
            currentSelection === "Filter",
            classes.connectorFilter,
          )}
        />
      </Flex>
      <Flex className={classes.backboneContainer}>
        <div className={classes.connectorVerticalBase} />
      </Flex>
      {currentSelection !== "None" && (
        <Flex alignItems="center">
          <div
            className={mergeClasses(
              classes.connectorHorizontalBase,
              classes.activeLine,
            )}
          />
        </Flex>
      )}
    </Flex>
  );
}
