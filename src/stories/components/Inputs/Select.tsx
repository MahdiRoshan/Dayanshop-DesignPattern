import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, forwardRef } from "react";
import { IconSvgProps } from "../../../assets/icons";
import Chevron from "../../../assets/icons/flat/Chevron";
import HelperText from "../FormElements/HelperText";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label?: string;
  value?: string;
  options?: { label: string; value: unknown; disabled?: boolean }[];
  onChange?: (value: unknown) => void;
  message?: string;
  messageIcon?: FC<IconSvgProps>;
  messageType?: "success" | "error";
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    label,
    value,
    options,
    onChange,
    message,
    messageIcon,
    messageType,
    className,
    disabled,
    ...rest
  } = props;

  return (
    <div className={clsx(className)}>
      <Listbox disabled={disabled} value={value} onChange={onChange}>
        {({ value, open }) => (
          <div className="relative">
            <Listbox.Button
              className={clsx("select-bordered", "flex items-center", {
                active: value !== undefined || open,
              })}
            >
              {options?.find((option) => option.value === value)?.label}
              <Chevron
                size={20}
                className="mr-auto -rotate-90 fill-red ui-disabled:fill-neutral-200"
              />
            </Listbox.Button>
            <Listbox.Label className={clsx("select-bordered-label")}>
              {label}
            </Listbox.Label>

            <Listbox.Options
              className={clsx(
                "select-bordered-dropdown",
                "absolute top-full right-0 z-10 w-full",
                "bg-white border border-neutral-100",
                "mt-1.5 py-2 font-medium"
              )}
            >
              {options?.map((option) => (
                <Listbox.Option
                  className="block w-full py-2 px-4 text-right hover:text-primary cursor-pointer"
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        )}
      </Listbox>
      {message && (
        <HelperText
          message={message}
          icon={messageIcon}
          className={clsx({
            "text-neutral-300": !messageType,
            "text-success": messageType === "success",
            "text-error": messageType === "error",
          })}
        />
      )}
    </div>
  );
});

export default Select;
