import { Preview } from "@storybook/react";
import { ThemeProvider } from "@lib-theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
