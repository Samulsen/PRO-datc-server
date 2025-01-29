import type { JSX } from "react";

import useOptionConceptsClasses from "./styles";

type TProps = {};

export default function OptionConcepts({}: TProps): JSX.Element {
  const classes = useOptionConceptsClasses();
  return <div className={classes.root}>OptionConcepts</div>;
}
