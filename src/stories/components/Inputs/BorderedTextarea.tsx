import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { IconSvgProps } from "../../../assets/icons";
import HelperText from "../FormElements/HelperText";

interface BorderedTextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  message?: string;
  messageType?: "success" | "error";
  messageIcon?: FC<IconSvgProps>;
  className?: string;
}

const BorderedTextarea = forwardRef<HTMLTextAreaElement, BorderedTextareaProps>(
  (props, ref) => {
    const { label, message, messageType, messageIcon, className, ...rest } =
      props;

    return (
      <div className={clsx("relative", className)}>
        <textarea className="textarea-bordered" ref={ref} {...rest} />
        {label && <label className="textarea-bordered-label">{label}</label>}
        <HelperText
          message={message}
          icon={messageIcon}
          className={clsx("mt-[6px]", {
            "text-neutral-300": !messageType,
            "text-success": messageType === "success",
            "text-error": messageType === "error",
          })}
        />
      </div>
    );
  }
);

export default BorderedTextarea;
