import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@app-ui/layout/partials/Sidebar";

import { Flex } from "@lib-components";
import { tokens } from "@lib-theme";

const meta: Meta = {
  title: "App/UI/Layout/Partials/Sidebar",
  component: Sidebar,
};

export default meta;

type TStory = StoryObj<typeof Sidebar>;

export const Index: TStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: tokens.colorNeutralBackground2,
        }}
      />
    </div>
  ),
};
