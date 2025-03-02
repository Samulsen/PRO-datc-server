import type { Meta, StoryObj } from "@storybook/react";

import Logo from "@lib-theme/Logo";

const meta: Meta = {
  title: "Theme/Logo",
  component: Logo,
  args: {
    appereance: "filled",
    size: "medium",
  },
};

export default meta;

type TStory = StoryObj<typeof Logo>;

export const Index: TStory = {};
