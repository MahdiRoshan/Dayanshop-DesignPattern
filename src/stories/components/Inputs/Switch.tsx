import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  Children,
} from "react";

interface SwitchProps extends ComponentPropsWithoutRef<"input"> {
  type?: "radio" | "checkbox";
  label?: ReactNode;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    label,
    className,
    children,
    checked,
    disabled,
    type = "checkbox",
    ...rest
  } = props;

  return (
    <label className={clsx("flex items-center", className)}>
      <input
        type={type}
        className="w-0 h-0 opacity-0 absolute peer"
        ref={ref}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <span
        className={clsx(
          "w-8 h-3 flex flex-row-reverse items-center rounded-full transition-colors peer-focus:shadow-input-focus",
          {
            "cursor-pointer": !disabled,
            "cursor-not-allowed": disabled,

            "bg-primary-500": checked && !disabled,
            "bg-primary-300": checked && disabled,

            "bg-neutral-300": !checked && !disabled,
            "bg-neutral-100": !checked && disabled,
          }
        )}
      >
        <span
          className={clsx("w-4 h-4 rounded-full border transition-all", {
            "translate-x-0": !checked,
            "translate-x-4": checked,

            "bg-white border-neutral-200": !checked && !disabled,
            "bg-neutral-50 border-neutral-100": !checked && disabled,

            "bg-white border-primary": checked && !disabled,
            "bg-white border-primary-300": checked && disabled,
          })}
        ></span>
      </span>
      {label && (
        <span
          className={clsx("text-sm lg:text-base mr-2", {
            "text-neutral-300 cursor-not-allowed": disabled,
          })}
        >
          {label}
        </span>
      )}
    </label>
  );
});

export default Switch;
