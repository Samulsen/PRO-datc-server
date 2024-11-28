import type { JSX } from "react";

import {
  LightbulbFilled,
  SearchFilled,
  HandshakeFilled,
  ChevronLeftFilled,
  ChevronRightFilled,
} from "@fluentui/react-icons";

import { Flex, Divider, TabList, Tab, Tooltip, Button } from "@lib-components";
import { Logo } from "@lib-theme";

import { TabTemplate } from "@app-ui/layout/partials/Sidebar/templates";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {
  defaultTab: "overview" | "browse";
  isExpanded: boolean;
  toggleExpandAction: () => void;
  overviewTabAction: () => void;
  browseTabAction: () => void;
};

export default function Sidebar({
  defaultTab,
  isExpanded,
  toggleExpandAction,
  overviewTabAction,
  browseTabAction,
}: TProps): JSX.Element {
  const classes = useSidebarClasses();
  return (
    <Flex
      className={classes.root}
      direction="column"
      justifyContent="spaceBetween"
      alignItems="end"
    >
      <Flex
        direction="column"
        justifyContent="start"
        alignItems="center"
        padding={["SNudge"]}
        gap="S"
      >
        <Logo size={isExpanded ? "extraLarge" : "medium"} />
        <Divider appearance="subtle" />
        <Flex
          shHeight="100%"
          shWidth="100%"
          justifyContent={isExpanded ? "start" : "center"}
          margin={isExpanded ? ["None", "XS", "None", "M"] : ["None"]}
        >
          <TabList vertical defaultSelectedValue={defaultTab}>
            <Tab
              icon={<LightbulbFilled />}
              value="overview"
              onClick={overviewTabAction}
            >
              {isExpanded && "Overview"}
            </Tab>
            <Tab
              icon={<SearchFilled />}
              value="browse"
              onClick={browseTabAction}
            >
              {isExpanded && "Browse"}
            </Tab>
            <Tooltip
              content="Will be available in 2.0"
              relationship="label"
              appearance="inverted"
              withArrow
              positioning="below-end"
            >
              <Tab icon={<HandshakeFilled />} value="contribute" disabled>
                {isExpanded && "Contribute"}
              </Tab>
            </Tooltip>
          </TabList>
        </Flex>
      </Flex>
      <Button
        className={classes.buttonOverride}
        icon={isExpanded ? <ChevronLeftFilled /> : <ChevronRightFilled />}
        appearance="secondary"
        size="small"
        onClick={toggleExpandAction}
      />
    </Flex>
  );
}
