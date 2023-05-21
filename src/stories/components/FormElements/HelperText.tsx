import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { IconSvgProps } from "../../../assets/icons";
import Alert from "../../../assets/icons/flat/Alert";
import Paragraphs from "../ApplicationUI/Typogeraphy/Paragraphs";

interface HelperTextProps extends ComponentPropsWithoutRef<"div"> {
  icon?: FC<IconSvgProps>;
  message?: string;
  className?: string;
}

const HelperText = forwardRef<HTMLDivElement, HelperTextProps>((props, ref) => {
  const { icon: Icon, message = "متن راهنما", className, ...rest } = props;
  
  return (
    <div
      className={clsx("flex items-center gap-1 text-sm", className)}
      ref={ref}
      {...rest}
    >
      {Icon ? <Icon size={16} /> : <Alert size={16} />}
      <Paragraphs content={message} />
    </div>
  );
});

export default HelperText;
