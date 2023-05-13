import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Blog = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        fill="white"
        stroke="black"
      />
      <path
        d="M15.9516 7.21183H3.99609V9.5472H15.9516C16.9144 9.5472 17.6933 10.3404 17.6933 11.3109V12.6758C17.6933 13.6507 16.91 14.4395 15.9516 14.4395H3.99609V16.7926H15.9516C18.1834 16.7926 20.0039 14.9536 20.0039 12.6891V11.3242C20.0039 9.05531 18.1878 7.2074 15.9516 7.2074V7.21183Z"
        fill="black"
      />
    </svg>
  );
});

Blog.displayName = "Blog";

export default Blog;
