import clsx from "clsx";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import Close from "../../../assets/icons/flat/Close";
interface CloseButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
}

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <button
        className={clsx("p-3 bg-neutral-50", className)}
        ref={ref}
        {...rest}
      >
        <Close size={32} />
      </button>
    );
  }
);

export default CloseButton;
