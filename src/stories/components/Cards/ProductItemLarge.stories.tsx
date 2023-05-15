import type { Meta, StoryObj } from "@storybook/react";
import ProductItemLarge from "./ProductItemLarge";

const meta: Meta<typeof ProductItemLarge> = {
  title: "ApplicationUI/Cards/large",
  component: ProductItemLarge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductItemLarge>;

export const large: Story = {
  args: {},
};
