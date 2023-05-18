import type { Meta, StoryObj } from "@storybook/react";
import Reaction from "./Reaction";

const meta: Meta<typeof Reaction> = {
  title: "ApplicationUI/Form elements/reaction",
  component: Reaction,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Reaction>;

export const reaction: Story = {};
