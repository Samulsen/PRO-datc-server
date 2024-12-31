import type { JSX } from "react";

import useBrowseMenuClasses from "./styles";

import {
  ChevronRightRegular,
  ChevronLeftRegular,
  ArrowRightFilled,
} from "@fluentui/react-icons";

import { Flex, TabList, Tab, Button, Tooltip } from "@lib-components";
import { LargeTitle } from "@lib-theme";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

import { BrowseListShard } from "@app-ui/navigation/partials/BrowseMenu/shards";

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
  return (
    <Flex
      alignItems="center"
      alignContent="stretch"
      gap="M"
      className={classes.root}
    >
      <Flex gap="M" alignItems="center">
        <LargeTitle>Browse</LargeTitle>
        <Button icon={<ChevronRightRegular />} size="small" />
      </Flex>
      <Flex alignItems="center">
        <div className={classes.connector} />
        <Flex
          alignItems="center"
          margin={["XL", "None"]}
          direction="column"
          position="relative"
          className={classes.betterGap}
        >
          <div className={classes.backbone} />
          <div className={classes.connector} />
          <div className={classes.connector} />
          <div className={classes.connector} />
          <div className={classes.connector} />
          <div className={classes.connector} />
        </Flex>
      </Flex>
      <BrowseListShard
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
      <Flex>
        <Flex>Connector</Flex>
        <Flex>Backbone</Flex>
        <Flex>Connector</Flex>
      </Flex>
      <Flex>{optionSlot}</Flex>
    </Flex>
  );
}
