import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "ApplicationUI/Form elements/tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const tooltip: Story = {
  args: {
    children: <span>tooltip</span>,
    content:
      "کلمه پیو (PU) مخفف عبارت پلی یورتان (Poly Urethane) است و به طور خلاصه به زیره‌هایی گفته می‌شود که با ترکیب دو ماده پلی ال و ایزوسیانات ساخته می‌شوند. زیره‌های پیو بسیار سبک هستند و دوام بالایی دارند. بنابراین کفش‌هایی که از زیره پیو بهره می‌برند، برای استفاده طولانی مدت بسیار مناسب هستند. اطلاعات بیشتر",
    placement: "bottom",
  },
};
