import { useState } from "react";
import type { JSX } from "react";

import {
  LightbulbFilled,
  LightbulbRegular,
  SearchFilled,
  SearchRegular,
  ChevronLeftFilled,
  ChevronRightFilled,
} from "@fluentui/react-icons";

import { Flex, Divider, TabList, Button } from "@lib-components";
import { Logo } from "@lib-theme";

import { TabTemplate } from "@app-ui/layout/partials/Sidebar/templates";
import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {
  defaultTab: "Overview" | "Browse";
  toggleExpandAction: () => void;
  overviewTabAction: () => void;
  browseTabAction: () => void;
  isExpanded: boolean;
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
        <Logo
          size={isExpanded ? "extraLarge" : "medium"}
          appereance={isExpanded ? "filled" : "outlined"}
        />
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
          </TabList>
        </Flex>
      </Flex>
      <Button
        className={classes.button}
        icon={isExpanded ? <ChevronLeftFilled /> : <ChevronRightFilled />}
        appearance="secondary"
        size="small"
        onClick={toggleExpandAction}
      />
    </Flex>
  );
}
