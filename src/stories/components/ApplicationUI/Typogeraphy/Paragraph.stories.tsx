import type { Meta, StoryObj } from "@storybook/react";
import Paragraphs from "./Paragraphs";

const meta: Meta<typeof Paragraphs> = {
  title: "ApplicationUI/Typogeraphy/paragraph",
  component: Paragraphs,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraphs>;

export const paragraph: Story = {
  args: {
    content:
      ".بیشتر سیستم‌ها اگر ساده نگه داشته شوند بهتر عمل می‌كنند، سادگی یک هدف اصلی در طراحی است",
  },
};
