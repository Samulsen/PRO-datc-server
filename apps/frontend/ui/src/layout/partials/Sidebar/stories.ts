import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@app-ui/layout/partials/Sidebar";

const meta: Meta = {
  title: "App/UI/Layout/Partials/Sidebar",
  component: Sidebar,
};

export default meta;

type TStory = StoryObj<typeof Sidebar>;

export const Index: TStory = {};
