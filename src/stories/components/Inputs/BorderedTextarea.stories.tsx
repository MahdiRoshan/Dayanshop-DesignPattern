import type { Meta, StoryObj } from "@storybook/react";
import Check from "../../../assets/icons/flat/Check";
import BorderedInput from "./BorderedInput";
import BorderedTextarea from "./BorderedTextarea";

const meta: Meta<typeof BorderedTextarea> = {
  title: "ApplicationUI/Inputs/bordered textarea",
  component: BorderedTextarea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BorderedTextarea>;

export const borderedTextarea: Story = {
  args: {
    label: "عنوان متن",
    messageType: "success",
    messageIcon: Check,
    placeholder: "راهنمای عنوان متن",
  },
};
