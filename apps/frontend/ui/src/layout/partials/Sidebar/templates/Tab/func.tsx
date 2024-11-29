import type { JSX } from "react";

import { Tab as OriginalTab, Flex } from "@lib-components";

import { EThemeIconSizes } from "@lib-theme";
import type { TFluentIcon } from "@lib-theme";

import useTabsClasses from "./styles";

type TProps = {
  action: () => void;
  selfValue: string;
  currentValue: string;
  iconFuncFilled: TFluentIcon;
  iconFuncRegular: TFluentIcon;
  isExpanded: boolean;
};

export default function Tab({
  action,
  selfValue,
  currentValue,
  iconFuncFilled: TabIconFilled,
  iconFuncRegular: TabIconRegular,
  isExpanded,
}: TProps): JSX.Element {
  const classes = useTabsClasses();
  const isSelected = selfValue === currentValue;
  return (
    <OriginalTab value={selfValue} onClick={action}>
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
