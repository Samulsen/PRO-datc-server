import type { JSX, ReactNode } from "react";

import { Flex, Button } from "@lib-components";
import { Subtitle2, Caption2 } from "@lib-theme";

import useOptionLayoutClasses from "@app-ui/navigation/templates/OptionLayout/styles";

type TProps = {
  header: string;
  subtitle: string;
  children?: ReactNode;
  onSearch: () => void;
  disabledSearch: boolean;
};

export default function OptionLayout({
  header,
  subtitle,
  children = undefined,
  onSearch,
  disabledSearch,
}: TProps): JSX.Element {
  const classes = useOptionLayoutClasses();
  return (
    <Flex className={classes.root} direction="column" padding={["M"]} gap="M">
      <Flex direction="column" gap="XS">
        <Subtitle2>{header}</Subtitle2>
        <Caption2>{subtitle}</Caption2>
      </Flex>
      {children}
      <Button appearance="primary" disabled={disabledSearch} onClick={onSearch}>
        Search
      </Button>
    </Flex>
  );
}
