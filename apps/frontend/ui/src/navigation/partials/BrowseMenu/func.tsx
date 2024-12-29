import type { JSX } from "react";

import useBrowseMenuClasses from "./styles";

import { ChevronRightRegular, ChevronLeftRegular } from "@fluentui/react-icons";

import { Flex, TabList, Tab, Button, Tooltip } from "@lib-components";
import { LargeTitle, Title1 } from "@lib-theme";

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
  return (
    <Flex alignItems="center" gap="M" className={classes.root}>
      <Flex gap="M" alignItems="center">
        <LargeTitle>Browse</LargeTitle>
        <Button icon={<ChevronRightRegular />} size="small" />
      </Flex>
      <Flex alignSelf="stretch" alignItems="center">
        <div className={classes.connector} />
        <Flex
          alignSelf="stretch"
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
      <Flex>
        <TabList vertical size="large" className={classes.tabListGap}>
          <Tab value="Content">
            <span className={classes.tabFontSize}>Content</span>
          </Tab>
          <Tab value="Concepts">
            <span className={classes.tabFontSize}>Concepts</span>
          </Tab>
          <Tab value="Random">
            <span className={classes.tabFontSize}>Random</span>
          </Tab>
          <Tab value="Word">
            <span className={classes.tabFontSize}>Word</span>
          </Tab>
          <Tab value="Filter">
            <span className={classes.tabFontSize}>Filter</span>
          </Tab>
        </TabList>
      </Flex>
      <Flex>Connector</Flex>
      <Flex>Slot</Flex>
    </Flex>
  );
}
