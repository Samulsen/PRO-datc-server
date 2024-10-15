import type { Meta, StoryObj } from "@storybook/react";

import App from "@app-ui/App";

const meta: Meta = {
  title: "Admin/App",
  component: App,
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {
  args: {},
};
