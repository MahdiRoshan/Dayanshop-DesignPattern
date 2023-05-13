import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Breadcrumb = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <path
        d="M8.55894 19.5684L13.029 3.84776C13.0679 3.70272 13.135 3.56674 13.2264 3.44761C13.3178 3.32848 13.4318 3.22852 13.5618 3.15344C13.6919 3.07836 13.8354 3.02963 13.9843 3.01003C14.1332 2.99043 14.2845 3.00034 14.4295 3.03921C14.7224 3.1177 14.9722 3.30934 15.1238 3.57198C15.2755 3.83461 15.3165 4.14673 15.238 4.43966L10.768 20.1603C10.7296 20.3057 10.6629 20.442 10.5717 20.5615C10.4804 20.681 10.3664 20.7812 10.2362 20.8563C10.106 20.9315 9.96217 20.9801 9.81308 20.9995C9.66399 21.0188 9.51255 21.0084 9.3675 20.9689C9.22213 20.9306 9.08578 20.8638 8.96632 20.7726C8.84686 20.6813 8.74666 20.5673 8.67149 20.4371C8.59632 20.3069 8.54768 20.1631 8.52836 20.014C8.50904 19.8649 8.51944 19.7135 8.55894 19.5684Z"
        fill="black"
      />
    </svg>
  );
});

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
