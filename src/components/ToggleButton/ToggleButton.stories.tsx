import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from "./ToggleButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {},
  args: {
    onToggle: () => console.log("Toggled"),
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const IconsOnly: Story = {
  args: {
    icons: ["moon", "sun"],
  },
};

export const WithLabels: Story = {
  args: {
    icons: ["globe"],
    labels: ["EN", "PL"],
  },
};
