import type { JSX } from "react";

import { MenuItemRadio as MenuItemRadioOrigin } from "@lib-components";

type TProps = {
  value: string;
};

export default function MenuItemRadio({ value }: TProps): JSX.Element {
  return (
    <MenuItemRadioOrigin name="option" value={value}>
      {value}
    </MenuItemRadioOrigin>
  );
}
