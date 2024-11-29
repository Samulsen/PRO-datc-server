import { useState } from "react";
import type { JSX } from "react";

import {
  LightbulbFilled,
  LightbulbRegular,
  SearchFilled,
  SearchRegular,
  HandshakeFilled,
  ChevronLeftFilled,
  ChevronRightFilled,
} from "@fluentui/react-icons";

import { Flex, Divider, TabList, Tab, Tooltip, Button } from "@lib-components";
import { Logo } from "@lib-theme";

import { TabTemplate } from "@app-ui/layout/partials/Sidebar/templates";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {
  defaultTab: "Overview" | "Browse";
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
  const [tabValue, setTabValue] = useState(defaultTab);
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
          <TabList vertical selectedValue={tabValue}>
            <TabTemplate
              action={() => {
                overviewTabAction();
                setTabValue("Overview");
              }}
              iconFuncFilled={LightbulbFilled}
              iconFuncRegular={LightbulbRegular}
              selfValue="Overview"
              currentValue={tabValue}
              isExpanded={isExpanded}
            />
            <TabTemplate
              action={() => {
                browseTabAction();
                setTabValue("Browse");
              }}
              iconFuncFilled={SearchFilled}
              iconFuncRegular={SearchRegular}
              selfValue="Browse"
              currentValue={tabValue}
              isExpanded={isExpanded}
            />
            <Tooltip
              content="Will be available in 2.0"
              relationship="label"
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
