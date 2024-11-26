import type { JSX } from "react";

import { Flex, Divider } from "@lib-components";
import { Logo } from "@lib-theme";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {};

export default function Sidebar({}: TProps): JSX.Element {
  const classes = useSidebarClasses();
  return <Flex className={classes.root}>Sidebar</Flex>;
}
