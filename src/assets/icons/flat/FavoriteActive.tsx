import { forwardRef } from "react";
import { IconSvgProps } from "..";

const FavoriteActive = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <path d="M12 21C11.8684 21.0008 11.7379 20.9756 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23002C1.99866 7.84445 2.54536 6.51484 3.51999 5.53002C4.50226 4.55053 5.83283 4.00049 7.21999 4.00049C8.60716 4.00049 9.93773 4.55053 10.92 5.53002L12 6.61002L13.08 5.53002C14.0623 4.55053 15.3928 4.00049 16.78 4.00049C18.1672 4.00049 19.4977 4.55053 20.48 5.53002C21.4546 6.51484 22.0013 7.84445 22.0013 9.23002C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9756 12.1316 21.0008 12 21Z" />
    </svg>
  );
});

FavoriteActive.displayName = "FavoriteActive";

export default FavoriteActive;
