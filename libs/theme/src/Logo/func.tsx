import type { JSX } from "react";

import useLogoClasses from "./styles";

import filled from "@lib-theme/Logo/svg/filled.svg";

type TProps = {};

export default function Logo({}: TProps): JSX.Element {
  const classes = useLogoClasses();
  return <div className={classes.root}>Logo</div>;
}
