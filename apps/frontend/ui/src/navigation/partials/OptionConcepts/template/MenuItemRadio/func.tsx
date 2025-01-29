import type { JSX } from "react";

import useMenuItemRadioClasses from "./styles";

type TProps = {};

export default function MenuItemRadio({}: TProps): JSX.Element {
  const classes = useMenuItemRadioClasses();
  return <div className={classes.root}>MenuItemRadio</div>;
}
