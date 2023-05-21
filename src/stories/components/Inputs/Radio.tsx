import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface RadioProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { label, className, children, ...rest } = props;

  return (
    <label
      className={clsx(
        "group flex items-center text-sm lg:text-base",
        className
      )}
    >
      <input
        className="peer w-0 h-0 opacity-0"
        ref={ref}
        {...rest}
        type="radio"
      />
      <span
        className={clsx(
          "flex items-center justify-center",
          "w-5 h-5 inline-block",
          "border border-neutral-200",
          "rounded-full",
          "after:block after:w-3 after:h-3 after:rounded-full",

          "peer-checked:border-black peer-checked:after:bg-black",

          "peer-focus:shadow-input-focus",

          "group-hover:border-black",
          "group-hover:peer-checked:border-neutral-400 group-hover:peer-checked:after:bg-neutral-400",

          "peer-disabled:border-neutral-100 peer-disabled:bg-neutral-50 peer-disabled:cursor-not-allowed",
          "peer-disabled:peer-checked:after:bg-neutral-200",
          "group-hover:peer-disabled:border-neutral-100 group-hover:peer-disabled:bg-neutral-50"
        )}
      />
      {label && (
        <span className="mr-2 peer-disabled:text-neutral-300 peer-disabled:cursor-not-allowed">
          {label}
        </span>
      )}
    </label>
  );
});

export default Radio;
