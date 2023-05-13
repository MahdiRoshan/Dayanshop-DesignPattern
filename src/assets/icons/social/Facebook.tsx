import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Facebook = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
    const { className, size = 24, color = "currentColor", strokeWidth = 1 } = props;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            strokeWidth={strokeWidth}
            className={className}
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17 9.1875H13.625V6.9375C13.625 6.3165 14.129 5.8125 14.75 5.8125H15.875V3H13.625C11.7609 3 10.25 4.51088 10.25 6.375V9.1875H8V12H10.25V21H13.625V12H15.875L17 9.1875Z" />
        </svg>
    );
});

Facebook.displayName = "Facebook";

export default Facebook;

