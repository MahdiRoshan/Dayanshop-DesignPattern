import type { Meta, StoryObj } from "@storybook/react";
import Newsletter from "./Newsletter";

const meta: Meta<typeof Newsletter> = {
  title: "ApplicationUI/Inputs/newsletter",
  component: Newsletter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Newsletter>;

export const newsletter: Story = {
  args: {
    placeholder: "مثال : ۶۷۸۹×××××۰۹",
  },
};
