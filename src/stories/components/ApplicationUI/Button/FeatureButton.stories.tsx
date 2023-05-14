import type { Meta, StoryObj } from "@storybook/react";
import Container from "../Container";
import FeatureButton from "./FeatureButton";

const meta: Meta<typeof FeatureButton> = {
  title: "ApplicationUI/Buttons/feature",
  component: FeatureButton,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeatureButton>;

export const numberSize: Story = {
  args: {
    children: <span>۴۰</span>,
  },
};

export const textSize: Story = {
  args: {
    children: <span>فری سایز (۴۰-۳۶)</span>,
    className: "px-[25.5px]",
  },
};

export const color: Story = {
  args: {
    children: (
      <div className="pr-5 pt-5 bg-primary-600 rounded-full group-disabled/feature:bg-primary-600/20"></div>
    ),
    className: "px-5 py-[14px]",
  },
};
