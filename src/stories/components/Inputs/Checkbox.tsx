import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  label?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, className, children, ...rest } = props;

  return (
    <label
      className={clsx(
        "flex items-center group text-sm lg:text-base",
        className
      )}
    >
      <input
        className="peer w-0 h-0 opacity-0"
        type="checkbox"
        ref={ref}
        {...rest}
      />
      <span
        className={clsx(
          "w-5 h-5 inline-block",
          "border border-neutral-200",
          "bg-center bg-no-repeat",
          "peer-checked:bg-black peer-checked:bg-check peer-checked:border-black",
          "peer-focus:shadow-input-focus",
          "group-hover:border-black group-hover:peer-checked:bg-neutral-400",
          "peer-disabled:border-neutral-100 peer-disabled:bg-neutral-50 peer-disabled:cursor-not-allowed",
          "peer-disabled:peer-checked:bg-check-disabled",
          "group-hover:peer-disabled:border-neutral-100 group-hover:peer-disabled:bg-neutral-50"
        )}
      />
      {label && (
        <span className="mr-2 peer-disabled:text-neutral-300 peer-disabled:cursor-not-allowed truncate">
          {label}
        </span>
      )}
    </label>
  );
});

export default Checkbox;
