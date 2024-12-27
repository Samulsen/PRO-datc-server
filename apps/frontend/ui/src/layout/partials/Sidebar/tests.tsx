import { useState } from "react";

import { render, screen, fireEvent } from "@tests-unit-browser";
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
  describe("when clicked", () => {
    describe("on a tab should switch selection and call associated action", () => {
      it("for Browse option", () => {
        const browseTabAction = jest.fn();
        render(
          <SidebarPartial
            defaultTab="Overview"
            isExpanded
            toggleExpandAction={() => {}}
            overviewTabAction={() => {}}
            browseTabAction={browseTabAction}
          />,
        );
        const BrowseButton = screen.getByTestId(constants.browseTabButtonId);
        const OverviewButton = screen.getByTestId(
          constants.overviewTabButtonId,
        );
        fireEvent.click(BrowseButton);
        expect(browseTabAction).toHaveBeenCalled();
        expect(OverviewButton).toHaveAttribute("aria-selected", "false");
        expect(BrowseButton).toHaveAttribute("aria-selected", "true");
      });
      it("for Overview option", () => {
        const overviewTabAction = jest.fn();
        render(
          <SidebarPartial
            defaultTab="Browse"
            isExpanded
            toggleExpandAction={() => {}}
            overviewTabAction={overviewTabAction}
            browseTabAction={() => {}}
          />,
        );
        const BrowseButton = screen.getByTestId(constants.browseTabButtonId);
        const OverviewButton = screen.getByTestId(
          constants.overviewTabButtonId,
        );
        fireEvent.click(OverviewButton);
        expect(overviewTabAction).toHaveBeenCalled();
        expect(OverviewButton).toHaveAttribute("aria-selected", "true");
        expect(BrowseButton).toHaveAttribute("aria-selected", "false");
      });
    });
    describe("on the expand button should toggle the sidebar", () => {
      function Wrapper({ isExpandedDef }: { isExpandedDef: boolean }) {
        const [isExpanded, setIsExpanded] = useState(isExpandedDef);
        return (
          <SidebarPartial
            defaultTab="Overview"
            isExpanded={isExpanded}
            toggleExpandAction={() => {
              setIsExpanded((prevState) => !prevState);
            }}
            overviewTabAction={() => {}}
            browseTabAction={() => {}}
          />
        );
      }

      it("click will minimize", () => {
        render(<Wrapper isExpandedDef />);
        const SidebarRoot = screen.getByLabelText("Sidebar");
        expect(SidebarRoot).toHaveAttribute("aria-expanded", "true");
        fireEvent.mouseEnter(SidebarRoot);

        const ToggleButton = screen.getByTestId(constants.toggleExpandButtonId);
        fireEvent.click(ToggleButton);
        expect(SidebarRoot).toHaveAttribute("aria-expanded", "false");
        expect(ToggleButton).not.toBeInTheDocument();
      });

      it("click will maximize", () => {
        render(<Wrapper isExpandedDef={false} />);
        const SidebarRoot = screen.getByLabelText("Sidebar");
        expect(SidebarRoot).toHaveAttribute("aria-expanded", "false");
        fireEvent.mouseEnter(SidebarRoot);

        const ToggleButton = screen.getByTestId(constants.toggleExpandButtonId);
        fireEvent.click(ToggleButton);
        expect(SidebarRoot).toHaveAttribute("aria-expanded", "true");
        expect(ToggleButton).not.toBeInTheDocument();
      });
    });
  });
});
