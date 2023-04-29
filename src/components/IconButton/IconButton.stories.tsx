import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    icon: "user",
    label: "User icon",
  },
};

export const AnchorLeft: Story = {
  args: {
    icon: "user",
    label: "User icon",
    anchorPoint: "left",
  },
};

export const AnchorRight: Story = {
  args: {
    icon: "user",
    label: "User icon",
    anchorPoint: "right",
  },
};
