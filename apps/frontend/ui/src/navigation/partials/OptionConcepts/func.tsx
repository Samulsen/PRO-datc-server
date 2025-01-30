import type { JSX } from "react";

import { Flex, Button, MenuList } from "@lib-components";
import { Subtitle2, Caption2 } from "@lib-theme";

import useOptionConceptsClasses from "@app-ui/navigation/partials/OptionConcepts/styles";
import { MenuItemRadioTemplate } from "@app-ui/navigation/partials/OptionConcepts/template";
import { useSelectionState } from "@app-ui/navigation/partials/OptionConcepts/hooks";

type TProps = {
  concepts: string[];
  onSearch: (value: string) => void;
};

export default function OptionConcepts({
  concepts,
  onSearch,
}: TProps): JSX.Element {
  const classes = useOptionConceptsClasses();
  const { checkedValues, onChange } = useSelectionState();
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
        {concepts.map((concept) => (
          <MenuItemRadioTemplate key={`${concept}-key`} value={concept} />
        ))}
      </MenuList>
      <Button
        appearance="primary"
        disabled={checkedValues.concept.length === 0}
        onClick={() => {
          onSearch(checkedValues.concept[0]);
        }}
      >
        Search
      </Button>
    </Flex>
  );
}
