import type { BrandVariants, Theme } from "@fluentui/react-components";
import { createLightTheme, createDarkTheme } from "@fluentui/react-components";

const myNewTheme: BrandVariants = {
  10: "#020403",
  20: "#111B19",
  30: "#172E2A",
  40: "#1C3B36",
  50: "#1F4942",
  60: "#23574F",
  70: "#26665C",
  80: "#297569",
  90: "#2C8477",
  100: "#2E9485",
  110: "#30A493",
  120: "#31B4A2",
  130: "#56C2B0",
  140: "#7CCEBF",
  150: "#9DDACE",
  160: "#BDE6DD",
};

const lightTheme: Theme = {
  ...createLightTheme(myNewTheme),
};

const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
};

darkTheme.colorBrandForeground1 = myNewTheme[110];
darkTheme.colorBrandForeground2 = myNewTheme[120];

export default { light: lightTheme, dark: darkTheme };
