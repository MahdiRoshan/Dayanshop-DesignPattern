import clsx from "clsx";
import { FC, Children, ReactElement } from "react";

interface TextLinkButtonProps {
  link?: string;
  children: ReactElement;
  className?: string;
}

const TextLinkButton: FC<TextLinkButtonProps> = (props) => {
  const { link, children, className } = props;
  return (
    <a
      href={link || "#"}
      className={clsx("flex items-center gap-1", className)}
    >
      {children}
    </a>
  );
};

export default TextLinkButton;
