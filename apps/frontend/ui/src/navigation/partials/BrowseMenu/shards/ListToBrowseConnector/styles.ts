import { makeStyles } from "@lib-theme";
import shared from "@app-ui/navigation/partials/BrowseMenu/shared";

const useListToBrowseConnectorClasses = makeStyles({
  root: {},
  connectorVerticalBase: {
    width: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
  },
  connectorHorizontalBase: {
    height: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
    minWidth: shared.connectorMinLength,
  },
});

export default useListToBrowseConnectorClasses;
