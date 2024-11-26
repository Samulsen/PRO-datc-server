import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@app-ui/layout/partials/Sidebar";

import { tokens } from "@lib-theme";

const meta: Meta = {
  title: "App/UI/Layout/Partials/Sidebar",
  component: Sidebar,
  args: {
    defaultTab: "overview",
    isExpanded: true,
    toggleExpandAction: () => {},
    overviewTabAction: () => {},
    browseTabAction: () => {},
  },
};

export default meta;

type TStory = StoryObj<typeof Sidebar>;

export const Index: TStory = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          gap: "1rem",
          padding: "1rem",
          height: "700px",
        }}
      >
        <Sidebar
          {...args}
          toggleExpandAction={() => {
            setIsExpanded(!isExpanded);
          }}
          isExpanded={isExpanded}
        />
        <div
          style={{
            width: "100%",
            backgroundColor: tokens.colorNeutralBackground1,
          }}
        />
      </div>
    );
  },
};
