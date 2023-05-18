import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import Check from "../../../assets/icons/flat/Check";
import Information from "../../../assets/icons/flat/Information";
import Heading from "../ApplicationUI/Typogeraphy/Heading";
import Paragraphs from "../ApplicationUI/Typogeraphy/Paragraphs";

interface ToastMessageProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  content?: string;
  className?: string;
  type: "success" | "warning" | "error" | "info";
}

const ToastMessage = forwardRef<HTMLDivElement, ToastMessageProps>(
  (props, ref) => {
    const { title, content, type, className, ...rest } = props;

    return (
      <div
        className={clsx(
          "p-4 flex flex-col gap-2",
          { "bg-success-veryLight text-success": type === "success" },
          { "bg-warning-light text-warning": type === "warning" },
          { "bg-error-light text-error": type === "error" },
          { "bg-secondary-100 text-secondary-500": type === "info" },
          className
        )}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center gap-2">
          {type === "success" ? <Check size={24} /> : <Information />}
          <Heading tag="h4" className="text-base !font-bold" content={title} />
        </div>
        {content ? <Paragraphs content={content} className="!text-sm" /> : ""}
      </div>
    );
  }
);

export default ToastMessage;
