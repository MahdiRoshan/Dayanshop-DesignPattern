import type { Meta, StoryObj } from "@storybook/react";
import FavoriteButton from "./FavoriteButton";

const meta: Meta<typeof FavoriteButton> = {
  title: "ApplicationUI/Buttons/favorite",
  component: FavoriteButton,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const favoriteButton : Story ={}