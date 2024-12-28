import type { Meta, StoryObj } from "@storybook/react";

import BrowseMenu from "@app-ui/navigation/partials/BrowseMenu";

const meta: Meta = {
  title: "App/UI/Navigation/Partials/BrowseMenu",
  component: BrowseMenu,
  args: {},
};

export default meta;

type Story = StoryObj<typeof BrowseMenu>;

export const Index: Story = {};
