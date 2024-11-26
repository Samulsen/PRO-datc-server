import type { JSX } from "react";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {};

export default function Sidebar({}: TProps): JSX.Element {
  const classes = useSidebarClasses();
  return <div className={classes.root}>Sidebar</div>;
}
