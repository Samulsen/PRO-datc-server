import { EThemeDimensions, makeStyles } from "@lib-theme";
import shared from "@app-ui/navigation/partials/BrowseMenu/shared";

const useListToBrowseConnectorClasses = makeStyles({
  root: {},
  backboneContainer: {
    // transform: "translateX(-4px)",
  },
  connectorContainer: {
    gap: shared.connectorGap,
    width: shared.connectorMinLength,
  },
  connectorVerticalBase: {
    width: shared.connectorThickness,
    backgroundColor: shared.connectorColor,
  },
  connectorHorizontalBase: {
    height: shared.connectorThickness,
    width: shared.connectorMinLength,
  },

  activeLine: {
    backgroundColor: shared.connectorColor,
  },

  connectorCatalogue: {
    width: EThemeDimensions.S3,
  },
  connectorConcepts: {
    width: EThemeDimensions.S4,
  },
  connectorRandom: {
    width: EThemeDimensions.S6,
  },
  connectorWord: {
    width: EThemeDimensions.M1,
  },
  connectorFilter: {
    width: "124px",
  },
});

export default useListToBrowseConnectorClasses;
