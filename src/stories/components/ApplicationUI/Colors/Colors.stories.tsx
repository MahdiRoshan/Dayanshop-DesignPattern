import type { Meta, StoryObj } from "@storybook/react";
import Container from "../Container";

import Colors from "./Colors";

const meta: Meta<typeof Colors> = {
  title: "ApplicationUI/Colors",
  component: Colors,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const color: Story = {
  render: () => (
    <Container>
      <h2 className="text-lg font-bold mb-2">Colors</h2>
      <div className="grid grid-cols-12 gap-y-5 p-6 bg-[#f9fafd]">
        {/* Neutral */}
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-neutral-500 text-white">
          neutral-500
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-neutral-400 text-white">
          neutral-400
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-neutral-300">
          neutral-300
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-neutral-200">
          neutral-200
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-neutral-100">
          neutral-100
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-neutral-50">
          neutral-50
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-white">
          white
        </div>

        <div className="aspect-square select-all flex items-center text-xs justify-center text-white bg-neutral-500/25 col-start-10">
          500, 25%
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-white/90">
          00, 90%
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-white/60">
          00, 60%
        </div>
        {/* End Neutral */}

        {/* Primary */}
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-primary-600 text-white">
          primary-600
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-primary-500 text-white">
          primary-500
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-primary-300 text-white">
          primary-300
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-primary-100">
          primary-100
        </div>
        {/* End Primary */}

        <div className="col-start-0 col-end-13"></div>

        {/* Secondary */}
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-secondary-600 text-white">
          secondary-600
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-secondary-500 text-white">
          secondary-500
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-secondary-300 text-white">
          secondary-300
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-secondary-100">
          secondary-100
        </div>
        {/* End Secondary */}

        <div className="col-span-12">
          <hr />
        </div>

        {/* Success */}
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-success">
          success
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-success-light">
          success-light
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-success-veryLight">
          success-veryLight
        </div>
        {/* End Success */}

        {/* Warning */}
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-warning col-start-6">
          warning
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-warning-light">
          warning-light
        </div>
        {/* End Warning */}

        {/* Error */}
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-error text-white col-start-9">
          error
        </div>
        <div className="aspect-square select-all flex items-center text-xs justify-center bg-error-light">
          error-light
        </div>
        {/* End Error */}
      </div>
    </Container>
  ),
};
