import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "ApplicationUI/Form elements/dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const dropdown: Story = {
  args: {
    isShow: true,
    children: (
      <>
        <a className="dropdown-item">ورود به حساب</a>

        {/* or just simply use any element you need with `dropdown-item` class */}
        <p className="dropdown-item">
          خوش آمدید
          <br />
          <small className="text-neutral-300">مهران ارجمند</small>
        </p>

        <a className="dropdown-item">خروج از حساب</a>
      </>
    ),
  },
};
