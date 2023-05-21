import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "ApplicationUI/Inputs/radio",
  component: Radio,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const radio: Story = {
  args: {
    name: "radio",
    label: "انتخاب",
  },
};
 