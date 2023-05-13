import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Linkedin = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <path d="M19.996 18.9507V18.95H20V13.082C20 10.2113 19.382 8 16.026 8C14.4126 8 13.33 8.88533 12.888 9.72467H12.8413V8.268H9.6593V18.95H12.9726V13.6607C12.9726 12.268 13.2366 10.9213 14.9613 10.9213C16.6606 10.9213 16.686 12.5107 16.686 13.75V18.9507H19.996Z" />
      <path d="M4.26404 8.26855H7.58137V18.9506H4.26404V8.26855Z" />
      <path d="M5.92133 3C4.86067 3 4 3.86067 4 4.92133C4 5.982 4.86067 6.86067 5.92133 6.86067C6.982 6.86067 7.84267 5.982 7.84267 4.92133C7.842 3.86067 6.98133 3 5.92133 3V3Z" />
    </svg>
  );
});

Linkedin.displayName = "Linkedin";

export default Linkedin;
