import { Preview } from "@storybook/react";
import { ThemeProvider } from "@lib-theme";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#292929" },
        { name: "Light", value: "#F7F9F2" },
      ],
      default: "Dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
