import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "./CloseButton";

const meta: Meta<typeof CloseButton> = {
  title: "ApplicationUI/Form elements/close",
  component: CloseButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const close: Story = {};
