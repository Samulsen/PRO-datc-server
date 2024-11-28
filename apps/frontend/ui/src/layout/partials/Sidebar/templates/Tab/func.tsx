import type { JSX } from "react";

import { Tab as OriginalTab } from "@lib-components";

import useTabsClasses from "./styles";

type TProps = {
  tabAction: () => void;
  tabValue: string;
  tabLabel: string;
  tabIcon: JSX.Element;
};

export default function Tab({
  tabAction,
  tabValue,
  tabIcon,
  tabLabel,
}: TProps): JSX.Element {
  const classes = useTabsClasses();
  return (
    <OriginalTab value={tabValue} onClick={tabAction}>
      <span>
        {tabIcon} - {tabLabel}
      </span>
    </OriginalTab>
  );
}
