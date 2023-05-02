import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Primary button",
    variant: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
    variant: 'secondary'
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary button",
    variant: 'tertiary'
  },
};
