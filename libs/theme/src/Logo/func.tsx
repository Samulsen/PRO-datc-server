import type { JSX } from "react";

import useLogoClasses from "@lib-theme/Logo/styles";

import svg from "@lib-theme/Logo/svg";

import type { TLogoAppereance, TLogoSize } from "@lib-theme/Logo/types";

type TProps = {
  appereance?: TLogoAppereance;
  size?: TLogoSize;
};
/**
 * @description
 * - Logo component for global usage
 *
 * @props
 * - `appereance`: appereance of the logo, like if filled or outlined
 * - `size`: size of the logo
 *
 * @default
 * appereance="filled", size="medium"
 */
export default function Logo({
  appereance = "filled",
  size = "medium",
}: TProps): JSX.Element {
  const classes = useLogoClasses();
  return <div className={classes[size]}>{svg[appereance]}</div>;
}
