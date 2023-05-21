import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "ApplicationUI/Inputs/select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const select: Story = {
  args: {
    label: "انتخاب کنید",
    options: [
      { label: "- هیچ -", value: null },
      { label: "یک", value: 1 },
      { label: "دو", value: 2 },
      { label: "سه", value: 3 },
      { label: "چهار", value: 4 },
    ],
  },
};
