import { forwardRef } from "react";
import { IconSvgProps } from "..";

const WalletGray = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <path opacity="0.5" d="M19 6.25H16.75V10.5H19V6.25Z" fill="#E1E1E1" />
      <path opacity="0.5" d="M19 15H16.75V19.125H19V15Z" fill="#E1E1E1" />
      <path
        d="M16 6.75H4V5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5V6.75Z"
        fill="#CDCDCD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 11.25C12.6692 11.25 12 11.9192 12 12.75C12 13.5808 12.6692 14.25 13.5 14.25H19C19.8308 14.25 20.5 13.5808 20.5 12.75C20.5 11.9192 19.8308 11.25 19 11.25H13.5ZM10.5 12.75C10.5 11.0908 11.8408 9.75 13.5 9.75H19C20.6592 9.75 22 11.0908 22 12.75C22 14.4092 20.6592 15.75 19 15.75H13.5C11.8408 15.75 10.5 14.4092 10.5 12.75Z"
        fill="#999999"
      />
      <path
        d="M19 15H18.5V17.75C18.5 18.165 18.165 18.5 17.75 18.5H4.25C3.835 18.5 3.5 18.165 3.5 17.75V7.75C3.5 7.335 3.835 7 4.25 7H17.75C18.165 7 18.5 7.335 18.5 7.75V10.5H19C19.36 10.5 19.7 10.595 20 10.745V7.75C20 6.51 18.99 5.5 17.75 5.5H4.25C3.01 5.5 2 6.51 2 7.75V17.75C2 18.99 3.01 20 4.25 20H17.75C18.99 20 20 18.99 20 17.75V14.755C19.7 14.905 19.36 15 19 15Z"
        fill="#999999"
      />
      <path
        d="M18.875 13.375C19.2202 13.375 19.5 13.0952 19.5 12.75C19.5 12.4048 19.2202 12.125 18.875 12.125C18.5298 12.125 18.25 12.4048 18.25 12.75C18.25 13.0952 18.5298 13.375 18.875 13.375Z"
        fill="#999999"
      />
    </svg>
  );
});

WalletGray.displayName = "WalletGray";

export default WalletGray;
