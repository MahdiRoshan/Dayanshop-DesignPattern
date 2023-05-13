import { forwardRef } from "react";
import { IconSvgProps } from "..";

const PendingOne = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M9.42861 15.8571C5.8782 15.8571 3.00004 12.979 3.00004 9.42857C3.00004 5.87817 5.8782 3 9.42861 3C12.979 3 15.8572 5.87817 15.8572 9.42857C15.8572 12.979 12.979 15.8571 9.42861 15.8571Z"
        fill="#CDCDCD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4009 6.06211C9.99748 5.91798 9.56712 5.86523 9.14086 5.90767C8.71461 5.95011 8.3031 6.08668 7.93606 6.30752C7.56899 6.52837 7.25553 6.82797 7.01844 7.18469C6.72363 7.62818 6.8441 8.22674 7.28754 8.52158C7.73112 8.81642 8.32962 8.69592 8.62447 8.25242C8.70351 8.13352 8.80799 8.03365 8.93034 7.96004C9.05269 7.88642 9.18986 7.84089 9.33195 7.82675C9.47403 7.81261 9.61748 7.83018 9.75194 7.87823C9.88641 7.92628 10.0085 8.00359 10.1095 8.10457C10.486 8.48122 11.0965 8.48133 11.4732 8.10482C11.8498 7.72833 11.8499 7.11777 11.4734 6.74112C11.1706 6.43817 10.8043 6.20625 10.4009 6.06211Z"
        fill="#999999"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.605 13.2412L20.7176 19.3538C21.0941 19.7304 21.0941 20.3409 20.7176 20.7175C20.341 21.094 19.7304 21.094 19.3539 20.7175L13.2413 14.6049C13.7613 14.2213 14.2214 13.7612 14.605 13.2412Z"
        fill="#999999"
      />
    </svg>
  );
});

PendingOne.displayName = "PendingOne";

export default PendingOne;
