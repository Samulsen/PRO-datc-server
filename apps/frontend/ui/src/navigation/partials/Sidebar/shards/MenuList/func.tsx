import type { JSX, Dispatch, SetStateAction } from "react";

import {
  LightbulbFilled,
  LightbulbRegular,
  SearchFilled,
  SearchRegular,
} from "@fluentui/react-icons";

import { Flex, TabList } from "@lib-components";

import constants from "@app-ui/navigation/partials/Sidebar/constants";
import type { TUiSidebarPageOption } from "@app-ui/navigation/partials/Sidebar/types";

import { TabTemplate } from "@app-ui/navigation/partials/Sidebar/shards/MenuList/templates";

type TProps = {
  isExpanded: boolean;
  overviewTabAction: () => void;
  browseTabAction: () => void;
  tabValue: TUiSidebarPageOption;
  setTabValue: Dispatch<SetStateAction<TUiSidebarPageOption>>;
};

export default function MenuList({
  isExpanded,
  overviewTabAction,
  browseTabAction,
  tabValue,
  setTabValue,
}: TProps): JSX.Element {
  return (
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
          dataTestId={constants.overviewTabButtonId}
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
          dataTestId={constants.browseTabButtonId}
        />
      </TabList>
    </Flex>
  );
}
