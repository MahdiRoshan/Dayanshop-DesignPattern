import type { Meta, StoryObj } from "@storybook/react";
import HelperText from "./HelperText";

const meta: Meta<typeof HelperText> = {
  title: "ApplicationUI/Form elements/helper text",
  component: HelperText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const helperText: Story = {
  args: {
    className: "text-success",
  },
};
