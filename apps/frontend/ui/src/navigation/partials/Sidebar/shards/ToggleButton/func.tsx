import type { JSX, Dispatch, SetStateAction } from "react";

import { ChevronLeftFilled, ChevronRightFilled } from "@fluentui/react-icons";
import { Button, Tooltip } from "@lib-components";

import constants from "@app-ui/navigation/partials/Sidebar/constants";

import useToggleButtonClasses from "@app-ui/navigation/partials/Sidebar/shards/ToggleButton/styles";

type TProps = {
  isExpanded: boolean;
  toggleExpandAction: () => void;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
};

export default function ToggleButton({
  isExpanded,
  toggleExpandAction,
  setIsHovered,
}: TProps): JSX.Element {
  const classes = useToggleButtonClasses();
  return (
    <Tooltip
      content={isExpanded ? "Collapse" : "Expand"}
      positioning="below-end"
      relationship="label"
      showDelay={1000}
    >
      <Button
        data-testid={constants.toggleExpandButtonId}
        className={classes.root}
        icon={isExpanded ? <ChevronLeftFilled /> : <ChevronRightFilled />}
        appearance="secondary"
        size="small"
        onClick={() => {
          toggleExpandAction();
          setIsHovered(false);
        }}
      />
    </Tooltip>
  );
}
