import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Bleach = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <path d="M11.9998 4.15438L3.98549 20.1825H20.0136L11.9998 4.15438ZM12.4872 3.30132L20.9423 20.2112C21.0769 20.4805 20.9678 20.8078 20.6987 20.9424C20.6228 20.9802 20.5394 21 20.4548 21H3.54494C3.24386 21 3 20.7559 3 20.455C3 20.3703 3.01958 20.2868 3.0574 20.2112L11.5126 3.30132C11.6471 3.03217 11.9747 2.92306 12.2438 3.05764C12.3493 3.11029 12.4345 3.19583 12.4872 3.30132Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7559 8.41988L8.50261 20.8498L7.77233 20.4824L14.0256 8.05248L14.7559 8.41988Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2392 12.9893L13.3694 20.7307L12.6382 20.3652L16.508 12.6237L17.2392 12.9893Z"
      />
    </svg>
  );
});

Bleach.displayName = "Bleach";

export default Bleach;
