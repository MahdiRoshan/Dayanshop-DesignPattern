import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "ApplicationUI/Form elements/pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const pagination: Story = {
  args: {
    total: 25,
    current: 1,
  },
};
