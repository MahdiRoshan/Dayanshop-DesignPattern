import { FC } from "react";
import Container from "../Container";

interface GridProps {}

const Grid: FC<GridProps> = (props) => {
  const {} = props;
  return (
    <Container>
      <h2 className="text-lg font-bold mb-2">larg Grid (1140px and up)</h2>
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
      <h2 className="text-lg font-bold mb-2 mt-10">Small Grid (320px-599px)</h2>
      <div className="grid grid-cols-6 gap-4 min-w-[320px] max-w-[599px]">
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
  );
};

export default Grid;
