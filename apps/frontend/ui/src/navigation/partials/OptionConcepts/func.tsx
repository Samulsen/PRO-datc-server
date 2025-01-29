import { useState } from "react";
import type { JSX } from "react";

import { Flex, Button, MenuItemRadio, MenuList } from "@lib-components";
import { Subtitle2, Caption2 } from "@lib-theme";
import type { MenuProps as TMenuProps } from "@fluentui/react-components";

import useOptionConceptsClasses from "@app-ui/navigation/partials/OptionConcepts/styles";

type TProps = {
  concepts: string[];
  onSearch: (value: string) => void;
};

export default function OptionConcepts({
  concepts,
  onSearch,
}: TProps): JSX.Element {
  const classes = useOptionConceptsClasses();
  const [checkedValues, setCheckedValues] = useState<Record<string, string[]>>({
    option: [],
  });
  const onChange: TMenuProps["onCheckedValueChange"] = (
    _,
    { name, checkedItems },
  ) => {
    setCheckedValues((s) => ({ ...s, [name]: checkedItems }));
  };
  return (
    <Flex className={classes.root} direction="column" padding={["M"]} gap="M">
      <Flex direction="column" gap="XS">
        <Subtitle2>Search through recongizable concepts</Subtitle2>
        <Caption2>Choose from the given list below</Caption2>
      </Flex>
      <MenuList
        className={classes.list}
        checkedValues={checkedValues}
        onCheckedValueChange={onChange}
      >
        <MenuItemRadio name="option" value="option1">
          Option 1
        </MenuItemRadio>
        <MenuItemRadio name="option" value="option2">
          Option 2
        </MenuItemRadio>
        <MenuItemRadio name="option" value="option3">
          Option 3
        </MenuItemRadio>
        <MenuItemRadio name="option" value="option4">
          Option 4
        </MenuItemRadio>
      </MenuList>
      <Button
        appearance="primary"
        disabled={checkedValues.option.length === 0}
        onClick={() => {
          onSearch(checkedValues.option[0]);
        }}
      >
        Search
      </Button>
    </Flex>
  );
}
