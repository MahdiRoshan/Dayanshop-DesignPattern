import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { IconSvgProps } from "../../../assets/icons";

interface BorderedInput extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  message?: string;
  messageIcon?: FC<IconSvgProps>;
  messageType?: "success" | "error";
}

const borderedInput = forwardRef<HTMLInputElement, BorderedInput>(
  (props, ref) => {
    const { label, message, messageIcon, messageType, className, ...rest } =
      props;

    return (
      <div>
        <input type="text" ref={ref} className={clsx(className)} {...rest} />
        {label && <label>{label}</label>}
        
      </div>
    );
  }
);
