import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "./CloseButton";
import Rate from "./Rate";

const meta: Meta<typeof Rate> = {
  title: "ApplicationUI/Form elements/rate",
  component: Rate,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Rate>;

export const rate: Story = {
  args: {
    count: 4.2,
  },
};
