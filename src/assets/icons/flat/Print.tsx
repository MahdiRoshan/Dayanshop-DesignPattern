import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Print = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M19.3601 7H18.0001V5C18.0218 4.49233 17.8414 3.99675 17.4983 3.62186C17.1553 3.24698 16.6777 3.02335 16.1701 3H7.83008C7.32248 3.02335 6.84484 3.24698 6.50182 3.62186C6.15879 3.99675 5.97837 4.49233 6.00008 5V7H4.64008C3.93634 7.00529 3.26337 7.28924 2.76856 7.78968C2.27375 8.29011 1.99741 8.96625 2.00008 9.67V16.33C1.99741 17.0338 2.27375 17.7099 2.76856 18.2103C3.26337 18.7108 3.93634 18.9947 4.64008 19H5.50008C5.50008 19.5304 5.71079 20.0391 6.08587 20.4142C6.46094 20.7893 6.96965 21 7.50008 21H16.5001C17.0305 21 17.5392 20.7893 17.9143 20.4142C18.2894 20.0391 18.5001 19.5304 18.5001 19H19.3601C20.0638 18.9947 20.7368 18.7108 21.2316 18.2103C21.7264 17.7099 22.0027 17.0338 22.0001 16.33V9.67C22.0027 8.96625 21.7264 8.29011 21.2316 7.78968C20.7368 7.28924 20.0638 7.00529 19.3601 7ZM8.00008 5H16.0001V7H8.00008V5ZM7.50008 19V15H16.5001V19H7.50008ZM20.0001 16.33C20.0028 16.5034 19.9372 16.6708 19.8174 16.7962C19.6977 16.9216 19.5334 16.9948 19.3601 17H18.5001V15C18.5001 14.4696 18.2894 13.9609 17.9143 13.5858C17.5392 13.2107 17.0305 13 16.5001 13H7.50008C6.96965 13 6.46094 13.2107 6.08587 13.5858C5.71079 13.9609 5.50008 14.4696 5.50008 15V17H4.64008C4.46678 16.9948 4.3025 16.9216 4.18275 16.7962C4.06299 16.6708 3.99737 16.5034 4.00008 16.33V9.67C3.99737 9.49664 4.06299 9.32919 4.18275 9.20382C4.3025 9.07845 4.46678 9.00523 4.64008 9H19.3601C19.5334 9.00523 19.6977 9.07845 19.8174 9.20382C19.9372 9.32919 20.0028 9.49664 20.0001 9.67V16.33Z"
        fill="black"
      />
    </svg>
  );
});

Print.displayName = "Print";

export default Print;
