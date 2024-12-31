import { makeStyles, tokens, EThemeDimensions } from "@lib-theme";
import shared from "@app-ui/navigation/partials/BrowseMenu/shared";

const useBrowseToListConnectorClasses = makeStyles({
  root: {
    gap: "63px",
  },
  connectorVertical: {
    width: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
    borderRadius: tokens.borderRadiusSmall,
    transform: "translateX(-24px)",
    position: "absolute",
    height: "100%",
  },
  connectorHorizontal: {
    height: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
    width: EThemeDimensions.S2,
    borderRadius: tokens.borderRadiusSmall,
  },
});

export default useBrowseToListConnectorClasses;
