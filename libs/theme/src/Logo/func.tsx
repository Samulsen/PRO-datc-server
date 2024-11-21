import type { JSX } from "react";

import useLogoClasses from "./styles";

type TProps = {};

export default function Logo({}: TProps): JSX.Element {
  const classes = useLogoClasses();
  return <div className={classes.root}>Logo</div>;
}
