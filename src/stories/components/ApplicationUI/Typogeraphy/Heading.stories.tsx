import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "ApplicationUI/Typogeraphy/heading",
  component: Heading,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const heading: Story = {
  args: {
    tag: "h2",
    content: ".سادگی یک هدف اصلی در طراحی است",
  },
};
