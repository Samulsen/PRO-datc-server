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
  return (
    <Flex>
      <Flex
        direction="column"
        alignItems="end"
        className={classes.connectorContainer}
      >
        <div
          className={mergeClasses(
            classes.connectorHorizontalBase,
            classes.connectorCatalogue,
          )}
        />
        <div
          className={mergeClasses(
            classes.connectorHorizontalBase,
            classes.connectorConcepts,
          )}
        />
        <div
          className={mergeClasses(
            classes.connectorHorizontalBase,
            classes.connectorRandom,
          )}
        />
        <div
          className={mergeClasses(
            classes.connectorHorizontalBase,
            classes.connectorWord,
          )}
        />
        <div
          className={mergeClasses(
            classes.connectorHorizontalBase,
            classes.connectorFilter,
          )}
        />
      </Flex>
      <Flex className={classes.backboneContainer}>
        <div className={classes.connectorVerticalBase} />
      </Flex>
      <Flex alignItems="center">
        <div className={classes.connectorHorizontalBase} />
      </Flex>
    </Flex>
  );
}
