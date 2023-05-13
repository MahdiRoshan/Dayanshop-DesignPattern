import type { Meta, StoryObj } from "@storybook/react";
import Container from "../Container";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "ApplicationUI/GridSystem",
  component: Grid,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const GridSystem: Story = {
  render: () => (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          1
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          2
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          3
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          4
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          5
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          6
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          7
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          8
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          9
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          10
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          11
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          12
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 min-w-[320px] max-w-[599px] mt-10">
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          1
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          2
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          3
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          4
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          5
        </div>
        <div className="aspect-[1/6] bg-neutral-100 flex items-center justify-center">
          6
        </div>
      </div>
    </Container>
  ),
};
