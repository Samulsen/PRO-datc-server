import { makeStyles, EThemeDimensions } from "@lib-theme";

const useLogoClasses = makeStyles({
  extraSmall: {
    width: EThemeDimensions.XS4,
    height: EThemeDimensions.XS4,
  },
  small: {
    width: EThemeDimensions.XS6,
    height: EThemeDimensions.XS6,
  },
  medium: {
    width: EThemeDimensions.XS8,
    height: EThemeDimensions.XS8,
  },
  large: {
    width: EThemeDimensions.S4,
    height: EThemeDimensions.S4,
  },
  extraLarge: {
    width: EThemeDimensions.S8,
    height: EThemeDimensions.S8,
  },
});

export default useLogoClasses;
