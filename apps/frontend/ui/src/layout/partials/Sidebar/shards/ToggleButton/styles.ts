import { makeStyles } from "@lib-theme";

const useToggleButtonClasses = makeStyles({
  root: {
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

export default useToggleButtonClasses;
