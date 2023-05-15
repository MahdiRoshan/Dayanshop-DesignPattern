import type { Meta, StoryObj } from "@storybook/react";

import ProductItemSmall from "./ProductItemSmall";

const meta: Meta<typeof ProductItemSmall> = {
  title: "ApplicationUI/Cards/small",
  component: ProductItemSmall,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductItemSmall>;

export const large: Story = {
  args: {},
};
