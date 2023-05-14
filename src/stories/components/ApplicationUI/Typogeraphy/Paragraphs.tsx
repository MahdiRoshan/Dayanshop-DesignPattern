import clsx from "clsx";
import { FC } from "react";

interface ParagraphsProps {
  type?: "caption" | "paragraph";
  className?: string;
  content: string;
}

const Paragraphs: FC<ParagraphsProps> = (props) => {
  const { type, content, className } = props;

  if (type === "caption") {
    return (
      <span className={clsx("text-xs font-bold", className)}>{content}</span>
    );  
  }

  return (
    <p className={clsx("text-sm lg:text-base font-medium", className)}>
      {content} 
    </p>
  );
};

export default Paragraphs;
