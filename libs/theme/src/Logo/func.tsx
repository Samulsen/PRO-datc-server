import type { JSX } from "react";

import useLogoClasses from "./styles";

import svg from "@lib-theme/Logo/svg";

import type { TLogoAppereance, TLogoSize } from "@lib-theme/Logo/types";

type TProps = {
  appereance?: TLogoAppereance;
  size?: TLogoSize;
};

export default function Logo({
  appereance = "filled",
  size = "medium",
}: TProps): JSX.Element {
  const classes = useLogoClasses();
  return <div className={classes.root}>{svg[appereance]}</div>;
}
