import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import Swiper from "swiper";

interface SliderNavigatorProps extends Omit<ComponentPropsWithoutRef<"button">, "onClick" | "disabled"> {
    onClick?: (slider: Swiper) => void;
    isDisabled?: (slider: Swiper) => boolean;
}

const SliderNavigator = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<"button">>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <button className={clsx("slider-nav", className)} ref={ref} {...rest}>
            {children}
        </button>
    );
});

SliderNavigator.displayName = "SliderNavigator";

export default SliderNavigator;