import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Filter = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
  const {
    className,
    size = 24,
    color = "currentColor",
    strokeWidth = 1,
  } = props;

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
      <rect x="7" y="16" width="8" height="2" rx="1" />
      <rect x="5" y="11" width="12" height="2" rx="1" />
      <rect x="3" y="6" width="16" height="2" rx="1" />
    </svg>
  );
});

Filter.displayName = "Filter";

export default Filter;
