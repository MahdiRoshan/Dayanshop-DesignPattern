import type { Meta, StoryObj } from "@storybook/react";
import AddBasketButton from "./AddBasketButton";

const meta: Meta<typeof AddBasketButton> = {
  title: "ApplicationUI/Buttons/addBasket",
  component: AddBasketButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AddBasketButton>;

export const addToBasket: Story = {};
