import { makeStyles, tokens } from "@lib-theme";

const useSidebarClasses = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
  },
  buttonOverride: {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    // border: "none",
  },
});

export default useSidebarClasses;
