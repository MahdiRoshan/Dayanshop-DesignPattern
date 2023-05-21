import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "ApplicationUI/Inputs/switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const switchCheckbox: Story = {};
 