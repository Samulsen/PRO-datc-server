import type { JSX } from "react";

import { Tab as OriginalTab, Flex } from "@lib-components";

import { EThemeIconSizes } from "@lib-theme";
import type { TFluentIcon } from "@lib-theme";

import useTabClasses from "@app-ui/navigation/partials/Sidebar/shards/MenuList/templates/Tab/styles";

type TProps = {
  action: () => void;
  selfValue: string;
  dataTestId: string;
  currentValue: string;
  iconFuncFilled: TFluentIcon;
  iconFuncRegular: TFluentIcon;
  isExpanded: boolean;
};

export default function Tab({
  action,
  selfValue,
  currentValue,
  dataTestId,
  iconFuncFilled: TabIconFilled,
  iconFuncRegular: TabIconRegular,
  isExpanded,
}: TProps): JSX.Element {
  const classes = useTabClasses();
  const isSelected = selfValue === currentValue;
  return (
    <OriginalTab
      data-testid={dataTestId}
      value={selfValue}
      onClick={action}
      className={isExpanded ? classes.root : ""}
    >
      <Flex shWidth="100%" gap="S" justifyContent="center" alignItems="center">
        {isSelected ? (
          <TabIconFilled fontSize={EThemeIconSizes.XS} />
        ) : (
          <TabIconRegular fontSize={EThemeIconSizes.XS} />
        )}
        {isExpanded && (
          <>
            <span className={classes.dot} /> {selfValue}
          </>
        )}
      </Flex>
    </OriginalTab>
  );
}
