import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import type { IconNameType } from "./Icon.types";

const iconNames = [
  "home",
  "user",
  "pen-tool",
  "calendar",
  "mail",
  "globe",
  "linkedin",
  "github",
  "settings",
  "arrow-left",
  "arrow-right",
  "arrow-down-right",
  "sun",
  "moon",
  "triangle",
] as IconNameType[];

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
    },
  },
  args: {
    size: 24,
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "dark", value: "#333" },
        { name: "light", value: "#f1f1f1" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Feather: Story = {
  args: {
    name: iconNames[0],
  },
  argTypes: {
    name: { options: iconNames },
  },
};
