import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Check = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
      <path d="M9.71 11.29C9.5217 11.1017 9.2663 10.9959 9 10.9959C8.7337 10.9959 8.47831 11.1017 8.29 11.29C8.1017 11.4783 7.99591 11.7337 7.99591 12C7.99591 12.2663 8.1017 12.5217 8.29 12.71L11.29 15.71C11.3834 15.8027 11.4943 15.876 11.6161 15.9258C11.7379 15.9755 11.8684 16.0008 12 16C12.1369 15.9957 12.2714 15.9632 12.3953 15.9047C12.5192 15.8463 12.6297 15.763 12.72 15.66L19.72 7.65999C19.8816 7.45932 19.9596 7.204 19.9375 6.94728C19.9155 6.69055 19.7953 6.45223 19.6018 6.282C19.4084 6.11178 19.1567 6.02279 18.8993 6.0336C18.6418 6.0444 18.3985 6.15416 18.22 6.33999L12 13.54L9.71 11.29Z" />
      <path d="M21 11C20.7348 11 20.4804 11.1054 20.2929 11.2929C20.1054 11.4804 20 11.7348 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C10.4201 19.9993 8.87576 19.5308 7.56176 18.6535C6.24776 17.7763 5.22292 16.5297 4.61648 15.0708C4.01003 13.6119 3.84914 12.0061 4.15408 10.4559C4.45903 8.90569 5.21616 7.48048 6.33 6.36C7.0707 5.60938 7.95368 5.01404 8.92725 4.60881C9.90083 4.20358 10.9455 3.99661 12 4C12.6394 4.004 13.2766 4.07777 13.9 4.22C14.0305 4.26035 14.1678 4.27356 14.3036 4.2588C14.4393 4.24404 14.5706 4.20163 14.6894 4.13418C14.8081 4.06673 14.9118 3.97567 14.994 3.86662C15.0762 3.75757 15.1352 3.63284 15.1674 3.50011C15.1995 3.36739 15.2042 3.22948 15.181 3.0949C15.1578 2.96032 15.1073 2.83191 15.0326 2.71759C14.9579 2.60327 14.8605 2.50547 14.7466 2.43021C14.6326 2.35495 14.5045 2.30383 14.37 2.28C13.5931 2.09724 12.798 2.00331 12 2C10.0243 2.01026 8.09598 2.60552 6.45829 3.71065C4.8206 4.81578 3.54697 6.38126 2.79812 8.20953C2.04926 10.0378 1.85875 12.0469 2.25063 13.9834C2.64251 15.9198 3.59921 17.6968 5 19.09C6.85669 20.9475 9.37365 21.9939 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" />
    </svg>
  );
});

Check.displayName = "Check";

export default Check;
