import { useState } from "react";
import type { JSX } from "react";

import { ChevronLeftFilled, ChevronRightFilled } from "@fluentui/react-icons";

import { Flex, Divider, Button, Tooltip } from "@lib-components";
import { Logo } from "@lib-theme";

import constants from "@app-ui/layout/partials/Sidebar/constants";

import {
  MenuListShard,
  ToggleButtonShard,
} from "@app-ui/layout/partials/Sidebar/shards";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";
import type { TUiSidebarPageOption } from "@app-ui/layout/partials/Sidebar/types";

type TProps = {
  defaultTab: TUiSidebarPageOption;
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Flex
        aria-label="Sidebar"
        aria-expanded={isExpanded}
        className={classes.root}
        direction="column"
        justifyContent="spaceBetween"
        alignItems="end"
        shHeight="100%"
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
          <MenuListShard
            isExpanded={isExpanded}
            overviewTabAction={overviewTabAction}
            browseTabAction={browseTabAction}
            tabValue={tabValue}
            setTabValue={setTabValue}
          />
        </Flex>
        {isHovered && (
          <Tooltip
            content={isExpanded ? "Collapse" : "Expand"}
            positioning="below-end"
            relationship="label"
            showDelay={1000}
          >
            <Button
              data-testid={constants.toggleExpandButtonId}
              className={classes.button}
              icon={isExpanded ? <ChevronLeftFilled /> : <ChevronRightFilled />}
              appearance="secondary"
              size="small"
              onClick={() => {
                toggleExpandAction();
                setIsHovered(false);
              }}
            />
          </Tooltip>
        )}
      </Flex>
    </div>
  );
}
