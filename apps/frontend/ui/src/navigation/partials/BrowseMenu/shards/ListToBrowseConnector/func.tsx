import type { JSX } from "react";

import { Flex } from "@lib-components";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

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
      <Flex>Connector</Flex>
      <Flex>Backbone</Flex>
      <Flex>Connector</Flex>
    </Flex>
  );
}
