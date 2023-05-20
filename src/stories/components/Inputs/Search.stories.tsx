import type { Meta, StoryObj } from "@storybook/react";
import Eye from "../../../assets/icons/flat/Eye";
import Search from "./Search";

const meta: Meta<typeof Search> = {
  title: "ApplicationUI/Inputs/search",
  component: Search,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Search>;

export const large: Story = {
  args: {
    icon: <Eye />,
    placeholder: "جستجو",
  },
};
