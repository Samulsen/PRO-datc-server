import type { JSX } from "react";

import {
  LightbulbFilled,
  SearchFilled,
  HandshakeFilled,
} from "@fluentui/react-icons";

import { Flex, Divider, TabList, Tab, Tooltip } from "@lib-components";
import { Logo } from "@lib-theme";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {
  defaultTab: "overview" | "browse" | "contribute";
  isExpanded: boolean;
  toggleExpandAction: (isExpanded: boolean) => void;
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
      justifyContent="start"
      alignItems="center"
      padding={["SNudge"]}
      gap="S"
    >
      <Logo size="extraLarge" />
      <Divider appearance="subtle" />
      <Flex
        shHeight="100%"
        shWidth="100%"
        // justifyContent="center"
        margin={["None", "XS", "None", "M"]}
      >
        <TabList vertical defaultSelectedValue={defaultTab}>
          <Tab icon={<LightbulbFilled />} value="overview">
            Overview
          </Tab>
          <Tab icon={<SearchFilled />} value="browse">
            Browse
          </Tab>
          <Tooltip
            content="Will be available in 2.0"
            relationship="label"
            appearance="inverted"
            withArrow
            positioning="below-end"
          >
            <Tab icon={<HandshakeFilled />} value="contribute" disabled>
              Contribute
            </Tab>
          </Tooltip>
        </TabList>
      </Flex>
    </Flex>
  );
}
