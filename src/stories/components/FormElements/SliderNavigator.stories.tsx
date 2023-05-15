import type { Meta, StoryObj } from "@storybook/react";
import Chevron from "../../../assets/icons/flat/Chevron";
import SliderNavigator from "./SliderNavigator";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const meta: Meta<typeof SliderNavigator> = {
  title: "ApplicationUI/Form elements/sliderNavigator",
  component: SliderNavigator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SliderNavigator>;

export const large: Story = {
  args: {
    children: <Chevron />,
    disabled: true,
  },
};
