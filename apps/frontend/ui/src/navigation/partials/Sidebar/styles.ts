import { makeStyles, tokens } from "@lib-theme";

const useSidebarClasses = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusLarge,
    position: "relative",
  },

  button: {
    position: "absolute",

    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,

    borderTop: "1px solid transparent",
    borderRight: "1px solid transparent",
    ":hover": {
      borderTop: "1px solid transparent",
      borderRight: "1px solid transparent",
    },
  },
});

export default useSidebarClasses;
