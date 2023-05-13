import { forwardRef } from "react";
import { IconSvgProps } from "..";

const PreparationOne = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.01756 3C3.45558 3 3 3.45558 3 4.01756C3 4.57955 3.45558 5.03513 4.01756 5.03513H5.24563C5.30146 5.03513 5.35499 5.0573 5.39448 5.09678C5.43396 5.13626 5.45613 5.1898 5.45613 5.24563V15.6842C5.45613 16.2462 5.91171 16.7017 6.47369 16.7017C7.03568 16.7017 7.49125 16.2462 7.49125 15.6842V5.24563C7.49125 4.65006 7.25466 4.07887 6.83353 3.65773C6.41239 3.23659 5.84121 3 5.24563 3H4.01756ZM8.31579 17.1227C7.75381 17.1227 7.29823 17.5783 7.29823 18.1403C7.29823 18.7023 7.75381 19.1579 8.31579 19.1579H17.6583C17.7119 19.1584 17.7632 19.1793 17.8017 19.2163L19.257 20.6959C19.651 21.0967 20.2953 21.102 20.6959 20.708C21.0966 20.3138 21.102 19.6696 20.7079 19.2689L19.2465 17.7829L19.2376 17.774C18.8193 17.3591 18.2547 17.1253 17.6656 17.1227H17.6613H8.31579Z"
        fill="#CDCDCD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99222 17.2485L9.31094 17.2977L9.9928 17.2571C10.0024 17.419 10.0024 17.5811 9.9928 17.7428L9.99228 17.7514C9.92716 18.6556 9.51365 19.4991 8.83895 20.1046C8.16423 20.7101 7.28087 21.0303 6.37481 20.9977C5.46876 20.9651 4.61068 20.5824 3.98122 19.9299C3.35176 19.2776 3 18.4065 3 17.5C3 16.5936 3.35176 15.7224 3.98122 15.07C4.61068 14.4176 5.46876 14.0348 6.37481 14.0023C7.28087 13.9697 8.16423 14.2898 8.83895 14.8953C9.51365 15.5008 9.9271 16.3444 9.99222 17.2485Z"
        fill="#999999"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8335 6C10.8209 6 10 6.82086 10 7.83345V13.1666C10 14.1791 10.8209 15 11.8335 15H17.1666C18.1792 15 19 14.1791 19 13.1666V7.83345C19 6.82086 18.1792 6 17.1666 6H11.8335Z"
        fill="#CDCDCD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 12C15 11.4477 15.2306 11 15.5151 11H16.4849C16.7694 11 17 11.4477 17 12C17 12.5523 16.7694 13 16.4849 13H15.5151C15.2306 13 15 12.5523 15 12Z"
        fill="#999999"
      />
    </svg>
  );
});

PreparationOne.displayName = "preparationOne";

export default PreparationOne;
