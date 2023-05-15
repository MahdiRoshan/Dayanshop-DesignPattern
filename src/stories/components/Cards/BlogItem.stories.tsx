import type { Meta, StoryObj } from "@storybook/react";
import BlogItem from "./BlogItem";

const meta: Meta<typeof BlogItem> = {
  title: "ApplicationUI/Cards/blog",
  component: BlogItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BlogItem>;

export const large: Story = {
  args: {},
};
