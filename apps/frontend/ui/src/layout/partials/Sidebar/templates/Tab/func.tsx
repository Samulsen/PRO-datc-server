import type { JSX } from "react";

import { Tab as OriginalTab, Flex } from "@lib-components";

import { EThemeIconSizes } from "@lib-theme";
import type { TFluentIcon } from "@lib-theme";

import useTabsClasses from "./styles";

type TProps = {
  action: () => void;
  value: string;
  label: string;
  iconFunc: TFluentIcon;
  isExpanded: boolean;
};

export default function Tab({
  action,
  value,
  iconFunc: TabIcon,
  label,
  isExpanded,
}: TProps): JSX.Element {
  const classes = useTabsClasses();
  return (
    <OriginalTab value={value} onClick={action}>
      <Flex shWidth="100%" gap="S" justifyContent="center" alignItems="center">
        <TabIcon fontSize={EThemeIconSizes.XS} />
        {isExpanded && (
          <>
            <span className={classes.dot} /> {label}
          </>
        )}
      </Flex>
    </OriginalTab>
  );
}
