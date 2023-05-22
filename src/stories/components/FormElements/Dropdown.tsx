import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  isShow?: boolean;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const { className, isShow, children, ...rest } = props;

  if (!isShow) return <></>;

  return (
    <div className={clsx("dropdown", className)} ref={ref} {...rest}>
      {children}
    </div>
  );
  
});

export default Dropdown;
