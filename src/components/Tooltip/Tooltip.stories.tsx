import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Label with center anchor point",
  },
};

export const AnchorLeft: Story = {
  args: {
    children: "Label with left anchor point",
    anchorPoint: "left",
  },
};

export const AnchorRight: Story = {
  args: {
    children: "Label with right anchor point",
    anchorPoint: "right",
  },
};
