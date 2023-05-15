import type { Meta, StoryObj } from "@storybook/react";
import ProductItemMedium from "./ProductItemMedium";

const meta: Meta<typeof ProductItemMedium> = {
  title: "ApplicationUI/Cards/medium",
  component: ProductItemMedium,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductItemMedium>;

export const large: Story = {
  args: {},
};
