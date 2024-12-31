import type { JSX } from "react";

import { Flex } from "@lib-components";

import useBrowseToListConnectorClasses from "@app-ui/navigation/partials/BrowseMenu/shards/BrowseToListConnector/styles";

type TProps = {
  isExpanded: boolean;
};

export default function BrowseToListConnector({
  isExpanded,
}: TProps): JSX.Element {
  const classes = useBrowseToListConnectorClasses();
  return (
    <Flex alignItems="center">
      <div className={classes.connectorHorizontal} />
      {isExpanded && (
        <Flex
          alignItems="center"
          margin={["XL", "None"]}
          direction="column"
          position="relative"
          className={classes.root}
        >
          <div className={classes.connectorVertical} />
          <div className={classes.connectorHorizontal} />
          <div className={classes.connectorHorizontal} />
          <div className={classes.connectorHorizontal} />
          <div className={classes.connectorHorizontal} />
          <div className={classes.connectorHorizontal} />
        </Flex>
      )}
    </Flex>
  );
}
