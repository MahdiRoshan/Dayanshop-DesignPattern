import { forwardRef } from "react";
import { IconSvgProps } from "..";

const ComingBackTwo = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M21.4069 8.32065C21.7423 8.60642 21.7414 9.12477 21.4052 9.4095L16.0318 13.9586C15.7997 14.155 15.4439 13.9901 15.4439 13.686V11.1643H10.9465C10.552 11.1643 10.2322 10.8445 10.2322 10.45V7.2758C10.2322 6.88132 10.552 6.56152 10.9465 6.56152H15.4439V4.01372C15.4439 3.70909 15.8008 3.5443 16.0327 3.74186L21.4069 8.32065Z"
        fill="#FF385C"
      />
      <path
        d="M2.59315 15.6793C2.25773 15.3936 2.25854 14.8752 2.59486 14.5905L7.96819 10.0414C8.20029 9.84493 8.55611 10.0099 8.55611 10.314V12.8357H13.0536C13.4481 12.8357 13.7679 13.1554 13.7679 13.5499V16.7241C13.7679 17.1187 13.4481 17.4384 13.0536 17.4384H8.55611V19.9863C8.55611 20.2908 8.19922 20.4557 7.96735 20.2581L2.59315 15.6793Z"
        fill="#FF9BAD"
      />
    </svg>
  );
});

ComingBackTwo.displayName = "ComingBackTwo";

export default ComingBackTwo;
