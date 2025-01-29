import type { Meta, StoryObj } from "@storybook/react";

import OptionConcepts from "@app-ui/navigation/partials/OptionConcepts";

const meta: Meta = {
  title: "App/UI/Navigation/Partials/OptionConcepts",
  component: OptionConcepts,
  args: {},
};

export default meta;

type Story = StoryObj<typeof OptionConcepts>;

export const Index: Story = {};
