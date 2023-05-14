import type { Meta, StoryObj } from "@storybook/react";
import Chevron from "../../../../assets/icons/flat/Chevron";
import Plus from "../../../../assets/icons/flat/Plus";
import Container from "../Container";
import TextLinkButton from "./TextLinkButton";

const meta: Meta<typeof TextLinkButton> = {
  title: "ApplicationUI/Buttons/textLink",
  component: TextLinkButton,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextLinkButton>;

export const underline: Story = {
  args: {
    children: (
      <>
        <span className="underline underline-offset-8 font-medium">
          مشاهده همه
        </span>
      </>
    ),
  },
};

export const chevron: Story = {
  args: {
    children: (
      <>
        <Chevron size={16} />
        <span className="font-medium">مشاهده همه</span>
      </>
    ),
  },
};

export const plus: Story = {
  args: {
    children: (
      <>
        <span className="font-medium">مشاهده همه</span>
        <Plus size={16} />
      </>
    ),
  },
};
