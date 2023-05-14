import type { Meta, StoryObj } from "@storybook/react";
import Shopping from "../../../../assets/icons/flat/Shopping";
import Button from "./Button";
import { Primary } from "../../../Button.stories";

const meta: Meta<typeof Button> = {
  title: "ApplicationUI/Buttons/main",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const primary: Story = {
  args: {
    className: "flex justify-center items-center gap-2",
    variant: "primary",
    children: (
      <>
        <Shopping />
        <span>خرید</span>
        <Shopping />
      </>
    ),
  },
};

export const secodary: Story = {
  args: {
    ...primary.args,
    variant: "secondary",
  },
};

export const tertiary: Story = {
  args: {
    ...primary.args,
    variant: "tertiary",
  },
};

export const link: Story = {
  args: {
    ...primary.args,
    variant: "link",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
