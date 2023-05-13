import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import Loading from "../../../../assets/icons/flat/Loading";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary" | "tertiary" | "link";
  size?: "sm" | "md";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    disabled,
    variant = "primary",
    size = "medium",
    isLoading,
    children,
    ...rest
  } = props;

  const primaryButton = "btn-primary";
  const primaryLoading = "btn-primary-loading";

  const secondaryButton = "btn-secondary";
  const secondaryLoading = "btn-secondary-loading";

  const tertiaryButton = "btn-tertiary";
  const tertiaryLoading = "btn-tertiary-loading";

  const linkButton = "btn-link";
  const linkLoading = "btn-link-loading";

  const smallButton = "btn-sm";
  const smallLoading = "btn-sm-loading";

  return (
    <button
      className={clsx(className, {
        [primaryButton]: variant === "primary" && !isLoading,
        [secondaryButton]: variant === "secondary" && !isLoading,
        [tertiaryButton]: variant === "tertiary" && !isLoading,
        [linkButton]: variant === "link" && !isLoading,

        [primaryLoading]: variant === "primary" && isLoading,
        [secondaryLoading]: variant === "secondary" && isLoading,
        [tertiaryLoading]: variant === "tertiary" && isLoading,
        [linkLoading]: variant === "link" && isLoading,
        [smallLoading]: size === "sm" && isLoading,

        [smallButton]: size === "sm",
      })}
      disabled={disabled || isLoading}
      ref={ref}
      {...rest}
    >
      {isLoading ? <Loading className="animate-spin" /> : children}
    </button>
  );
});

export default Button;
