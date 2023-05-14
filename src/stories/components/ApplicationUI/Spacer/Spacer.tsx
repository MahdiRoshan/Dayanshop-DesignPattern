import { FC } from "react";
import Container from "../Container";

interface SpacerProps {}

const Spacer: FC<SpacerProps> = (props) => {
  const {} = props;
  return (
    <Container>
      <h2 className="text-lg font-bold mt-5 mb-2">Spacers</h2>
      <div className="flex items-start flex-col-reverse gap-5 text-center text-xs">
        <div className="pt-0.5 aspect-square bg-neutral-100 relative after:content-['2px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-1 aspect-square bg-neutral-100 relative after:content-['4px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-1.5 aspect-square bg-neutral-100 relative after:content-['6px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-2 aspect-square bg-neutral-100 relative after:content-['8px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-3 aspect-square bg-neutral-100 relative after:content-['12px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-4 aspect-square bg-neutral-100 relative after:content-['16px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-5 aspect-square bg-neutral-100 relative after:content-['20px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-6 aspect-square bg-neutral-100 relative after:content-['24px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-8 aspect-square bg-neutral-100 relative after:content-['32px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-10 aspect-square bg-neutral-100 relative after:content-['40px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-12 aspect-square bg-neutral-100 relative after:content-['48px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-14 aspect-square bg-neutral-100 relative after:content-['56px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-16 aspect-square bg-neutral-100 relative after:content-['64px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-24 aspect-square bg-neutral-100 relative after:content-['96px'] after:absolute after:top-full after:right-0"></div>
        <div className="pt-32 aspect-square bg-neutral-100 relative after:content-['128px'] after:absolute after:top-full after:right-0"></div>
      </div>
      <h2 className="text-lg font-bold mt-10 mb-2">Divider</h2>
      <div className="flex flex-col gap-4">
        <hr className="border-neutral-100" />
        <hr className="border-neutral-100 border-[10px]" />
      </div>
    </Container>
  );
};

export default Spacer;
