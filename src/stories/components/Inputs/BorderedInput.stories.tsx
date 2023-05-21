import type { Meta, StoryObj } from "@storybook/react";
import Check from "../../../assets/icons/flat/Check";
import BorderedInput from "./BorderedInput";

const meta: Meta<typeof BorderedInput> = {
  title: "ApplicationUI/Inputs/bordered input",
  component: BorderedInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BorderedInput>;

export const borderedInput: Story = {
  args: {
    label: "عنوان متن",
    messageType: "success",
    messageIcon: Check,
    placeholder: "راهنمای عنوان متن",
  },
};
