import type { JSX } from "react";

import useToggleButtonClasses from "@app-ui/layout/partials/Sidebar/shards/ToggleButton/styles";

type TProps = {};

export default function ToggleButton({}: TProps): JSX.Element {
  const classes = useToggleButtonClasses();
  return <div className={classes.root}>ToggleButton</div>;
}
