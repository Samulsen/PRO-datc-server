import type { JSX } from "react";

import { Tab as OriginalTab } from "@lib-components";

import type { TUiBrowseMenuOption } from "@app-ui/navigation/partials/BrowseMenu/types";

import useTabClasses from "@app-ui/navigation/partials/BrowseMenu/shards/BrowseList/templates/Tab/styles";

type TProps = {
  value: TUiBrowseMenuOption;
  onClick: (value: TUiBrowseMenuOption) => void;
};

export default function Tab({ value, onClick }: TProps): JSX.Element {
  const classes = useTabClasses();
  return (
    <OriginalTab
      value={value}
      onSelect={() => {
        onClick(value);
      }}
    >
      <span className={classes.root}>{value}</span>
    </OriginalTab>
  );
}
