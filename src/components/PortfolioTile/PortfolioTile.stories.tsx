import type { Meta, StoryObj } from "@storybook/react";

import PortfolioTile from "./PortfolioTile";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof PortfolioTile> = {
  title: "Components/PortfolioTile",
  component: PortfolioTile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PortfolioTile>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Personal Portfolio",
    categories: ["Frontend", "UI Design"],
    href: "",
  },
};
