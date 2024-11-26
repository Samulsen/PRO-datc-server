import type { JSX } from "react";

import { Flex, Divider } from "@lib-components";
import { Logo } from "@lib-theme";

import useSidebarClasses from "@app-ui/layout/partials/Sidebar/styles";

type TProps = {
  isExpanded: boolean;
  toggleExpandAction: (isExpanded: boolean) => void;
};

export default function Sidebar({
  isExpanded,
  toggleExpandAction,
}: TProps): JSX.Element {
  const classes = useSidebarClasses();
  return (
    <Flex
      className={classes.root}
      direction="column"
      justifyContent="start"
      padding={["SNudge"]}
    >
      <Logo size="extraLarge" />
      <Divider appearance="subtle" />
      <Flex shHeight="100%" shWidth="100%">
        Content
      </Flex>
    </Flex>
  );
}
