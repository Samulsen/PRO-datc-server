import type { JSX } from "react";

import { MenuList } from "@lib-components";

import { OptionLayoutTemplate } from "@app-ui/navigation/templates";
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
    <OptionLayoutTemplate
      header="Search through recongizable concepts"
      subtitle="Choose from the given list below"
      onSearch={() => {
        onSearch(checkedValues.concept[0]);
      }}
      disabledSearch={checkedValues.concept.length === 0}
    >
      <MenuList
        className={classes.list}
        checkedValues={checkedValues}
        onCheckedValueChange={onChange}
      >
        {concepts.map((concept) => (
          <MenuItemRadioTemplate key={`${concept}-key`} value={concept} />
        ))}
      </MenuList>
    </OptionLayoutTemplate>
  );
}
