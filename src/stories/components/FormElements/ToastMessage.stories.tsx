import type { Meta, StoryObj } from "@storybook/react";
import ToastMessage from "./ToastMessage";

const meta: Meta<typeof ToastMessage> = {
  title: "ApplicationUI/Form elements/toast message",
  component: ToastMessage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToastMessage>;

export const large: Story = {
  args: {
    type: "success",
    title: "اینجا عنوان یک پیام قرار می‌گیرد",
    content:
      "اینجا یک پیام قرار می‌گیرد. این پیام به معنای کمک به کاربر و یا دادان اطلاعات مهم به آن‌ها است. این پیام می‌تواند حاوی لینک باشد. اینجا یک پیام قرار می‌گیرد. این پیام به معنای کمک به کاربر و یا دادن اطلاعات مهم به آن‌ها است. این پیام می‌تواند حاوی لینک باشد",
  },
};
