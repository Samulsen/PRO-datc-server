import type { JSX } from "react";

import { Tab as OriginalTab, Flex } from "@lib-components";

import { EThemeIconSizes } from "@lib-theme";
import type { TFluentIcon } from "@lib-theme";

import useTabClasses from "@app-ui/layout/partials/Sidebar/templates/Tab/styles";

type TProps = {
  action: () => void;
  selfValue: string;
  currentValue: string;
  iconFuncFilled: TFluentIcon;
  iconFuncRegular: TFluentIcon;
  isExpanded: boolean;
  disabled?: boolean;
};

export default function Tab({
  action,
  selfValue,
  currentValue,
  iconFuncFilled: TabIconFilled,
  iconFuncRegular: TabIconRegular,
  isExpanded,
  disabled = false,
}: TProps): JSX.Element {
  const classes = useTabClasses();
  const isSelected = selfValue === currentValue;
  return (
    <OriginalTab
      value={selfValue}
      onClick={action}
      className={isExpanded ? classes.root : ""}
      disabled={disabled}
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
