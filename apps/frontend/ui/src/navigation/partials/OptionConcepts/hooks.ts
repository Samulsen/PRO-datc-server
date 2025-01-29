import { useState } from "react";
import type { MenuProps as TMenuProps } from "@fluentui/react-components";

function useSelectionState() {
  const [checkedValues, setCheckedValues] = useState<Record<string, string[]>>({
    option: [],
  });
  const onChange: TMenuProps["onCheckedValueChange"] = (
    _,
    { name, checkedItems },
  ) => {
    setCheckedValues((s) => ({ ...s, [name]: checkedItems }));
  };

  return { checkedValues, onChange };
}

export { useSelectionState };
