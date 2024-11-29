import { render, screen } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import constants from "@app-ui/layout/partials/Sidebar/constants";
import SidebarPartial from "@app-ui/layout/partials/Sidebar";

describe("Sidebar", () => {
  describe("when specified", () => {
    it("defaultTab as Overview should render this tab default", () => {
      render(
        <SidebarPartial
          defaultTab="Overview"
          isExpanded
          toggleExpandAction={() => {}}
          overviewTabAction={() => {}}
          browseTabAction={() => {}}
        />,
      );
      const OverviewButton = screen.getByTestId(constants.overviewTabButtonId);
      const BrowseButton = screen.getByTestId(constants.browseTabButtonId);
      expect(OverviewButton).toHaveAttribute("aria-selected", "true");
      expect(BrowseButton).toHaveAttribute("aria-selected", "false");
    });
    it("defaultTab as Browse should render this tab default", () => {
      render(
        <SidebarPartial
          defaultTab="Browse"
          isExpanded
          toggleExpandAction={() => {}}
          overviewTabAction={() => {}}
          browseTabAction={() => {}}
        />,
      );
      const OverviewButton = screen.getByTestId(constants.overviewTabButtonId);
      const BrowseButton = screen.getByTestId(constants.browseTabButtonId);
      expect(OverviewButton).toHaveAttribute("aria-selected", "false");
      expect(BrowseButton).toHaveAttribute("aria-selected", "true");
    });
  });
});
