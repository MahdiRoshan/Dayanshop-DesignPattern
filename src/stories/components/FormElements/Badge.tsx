import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Badge = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<"span">>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <span className={clsx("badge", className)} ref={ref} {...rest}>
            {children}
        </span>
    );
});

Badge.displayName = "Badge";

export default Badge;