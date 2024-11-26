import { makeStyles, tokens } from "@lib-theme";

const useSidebarClasses = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
  },
  buttonOverride: {},
});

export default useSidebarClasses;
