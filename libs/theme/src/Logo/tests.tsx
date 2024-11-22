import { render, screen } from "@tests-unit-browser";
import "@testing-library/jest-dom";

import { Logo } from "@lib-theme";
import logoConst from "@lib-theme/Logo/const";

describe("Logo", () => {
  describe("with no props", () => {
    render(<Logo />);
    it("should render with medium dimensions and as filled", () => {
      const LogoElement = screen.getByTestId(logoConst.dataTestId);
      expect(LogoElement).toBeInTheDocument();

      expect(LogoElement).toHaveStyle("width: 32px");
      expect(LogoElement).toHaveStyle("height: 32px");
    });
  });
  describe("with size prop", () => {
    it("should render with extraSmall dimensions", () => {
      render(<Logo size="extraSmall" />);
      const LogoElement = screen.getByTestId(logoConst.dataTestId);
      expect(LogoElement).toBeInTheDocument();

      expect(LogoElement).toHaveStyle("width: 16px");
      expect(LogoElement).toHaveStyle("height: 16px");
    });
    it("should render with small dimensions", () => {
      render(<Logo size="small" />);
      const LogoElement = screen.getByTestId(logoConst.dataTestId);
      expect(LogoElement).toBeInTheDocument();

      expect(LogoElement).toHaveStyle("width: 24px");
      expect(LogoElement).toHaveStyle("height: 24px");
    });
    it("should render with large dimensions", () => {
      render(<Logo size="large" />);
      const LogoElement = screen.getByTestId(logoConst.dataTestId);
      expect(LogoElement).toBeInTheDocument();

      expect(LogoElement).toHaveStyle("width: 64px");
      expect(LogoElement).toHaveStyle("height: 64px");
    });
    it("should render with extraLarge dimensions", () => {
      render(<Logo size="extraLarge" />);
      const LogoElement = screen.getByTestId(logoConst.dataTestId);
      expect(LogoElement).toBeInTheDocument();

      expect(LogoElement).toHaveStyle("width: 96px");
      expect(LogoElement).toHaveStyle("height: 96px");
    });
  });
});
