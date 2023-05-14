import Tippy from "@tippyjs/react";
import { FC, ReactElement } from "react";

interface TooltipProps {
  content?: string;
  placement?: "top" | "right" | "left" | "bottom";
  children: ReactElement;
  trigger?: "click" | "hover";
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { content, placement, children, trigger } = props;

  if (!content) {
    return <>{children}</>;
  }

  return (
    <Tippy
      content={content}
      placement={placement}
      trigger={trigger}
      className="tooltip"
      offset={[0, 5]}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
