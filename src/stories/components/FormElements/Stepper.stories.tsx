import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "ApplicationUI/Form elements/stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const stepper: Story = {};
