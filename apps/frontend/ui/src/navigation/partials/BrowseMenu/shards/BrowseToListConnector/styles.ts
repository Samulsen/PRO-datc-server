import { makeStyles } from "@lib-theme";
import shared from "@app-ui/navigation/partials/BrowseMenu/shared";

const useBrowseToListConnectorClasses = makeStyles({
  root: {
    gap: shared.connectorGap,
  },
  connectorVertical: {
    width: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
    borderRadius: shared.connectorBorderRadius,
    transform: "translateX(-24px)",
    position: "absolute",
    height: "100%",
  },
  connectorHorizontal: {
    height: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
    width: shared.connectorMinLength,
    borderRadius: shared.connectorBorderRadius,
  },
});

export default useBrowseToListConnectorClasses;
