import type { JSX } from "react";

import { Tooltip as UnmountedTooltip } from "@fluentui/react-components";
import type { TooltipProps } from "@fluentui/react-components";

import { useFuiProviderNode } from "@lib-theme";

type TProps = Omit<TooltipProps, "mountNode">;

export default function Tooltip(props: TProps): JSX.Element {
  const { fuiProviderNode } = useFuiProviderNode();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <UnmountedTooltip {...props} mountNode={fuiProviderNode} />;
}
