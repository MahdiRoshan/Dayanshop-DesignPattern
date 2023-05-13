import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

/**
 * Apply max width constraint and centered alignment
 */
const Container = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <div
        className={clsx("max-w-[1140px] px-6 mx-auto", className)}
        ref={ref}
        {...rest}
      />
    );
  }
);

Container.displayName = "Container";

export default Container;
