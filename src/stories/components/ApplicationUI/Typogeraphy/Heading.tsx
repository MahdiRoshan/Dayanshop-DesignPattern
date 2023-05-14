import clsx from "clsx";
import { FC } from "react";

interface HeadingProps {
  tag: "h2" | "h3" | "h4" | "h5" | "h6";
  content: string;
  className?: string;
}

const Heading: FC<HeadingProps> = (props) => {
  const { tag, content, className } = props;
  switch (tag) {
    case "h2":
      return (
        <h2 className={clsx("text-xl font-bold", className)}>{content}</h2>
      );
      break;
    case "h3":
      return (
        <h3 className={clsx("text-md lg:text-lg font-extrabold", className)}>
          {content}
        </h3>
      );
      break;
    case "h4":
      return (   
        <h4 className={clsx("text-base lg:text-md font-extrabold", className)}>{content}</h4>
      );
      break;
    case "h5": 
      return (
        <h5 className={clsx("text-sm lg:text-base font-extrabold", className)}>
          {content}
        </h5>
      );
      break;
    case "h6":
      return <h6 className={clsx("text-xs lg:text-sm font-bold")}>{content}</h6>;
      break;
    default:
      return <h1>{content}</h1>;
      break;
  }
};

export default Heading;
