import { forwardRef } from "react";
import { IconSvgProps } from "..";

const ReturnDisapprovalTwo = forwardRef<SVGSVGElement, IconSvgProps>(
  (props, ref) => {
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
          d="M12.0207 3.27173C11.9378 3.27173 11.8548 3.28195 11.7718 3.28195L12.6224 2.23932C12.8921 1.91222 12.8402 1.42157 12.4979 1.16602C12.4182 1.10356 12.3269 1.05719 12.229 1.02955C12.1311 1.00191 12.0287 0.993547 11.9275 1.00494C11.8264 1.01633 11.7285 1.04725 11.6395 1.09594C11.5504 1.14462 11.472 1.21012 11.4087 1.28868L9.35477 3.81349C9.3444 3.82371 9.3444 3.84416 9.33402 3.85438C9.3029 3.89527 9.28216 3.94638 9.26141 3.99749C9.24066 4.03837 9.21992 4.07926 9.20954 4.13037C9.19917 4.18148 9.19917 4.22237 9.19917 4.27348V4.47791C9.20954 4.50858 9.23029 4.53925 9.24066 4.56991C9.26141 4.62102 9.28216 4.66191 9.3029 4.71302C9.33402 4.75391 9.36514 4.79479 9.40664 4.82546C9.42738 4.8459 9.44813 4.87657 9.46888 4.90723C9.47925 4.91746 9.5 4.91746 9.51037 4.92768C9.54149 4.94812 9.57261 4.95834 9.60373 4.97879C9.6556 5.00945 9.71784 5.0299 9.76971 5.04012C9.80083 5.05034 9.83195 5.05034 9.87344 5.06056C9.90456 5.06056 9.92531 5.07078 9.95643 5.07078C9.98755 5.07078 10.0083 5.06056 10.029 5.05034C10.0602 5.05034 10.0913 5.06056 10.1224 5.05034C10.7863 4.89701 11.4087 4.82546 12 4.82546C16.6577 4.82546 20.444 8.55645 20.444 13.1461C20.444 17.7357 16.6577 21.4667 12 21.4667C7.34232 21.4667 3.55602 17.7357 3.55602 13.1461C3.55602 11.3675 4.1473 9.6502 5.26763 8.17824C5.32894 8.0977 5.37354 8.00605 5.3989 7.90852C5.42425 7.811 5.42987 7.7095 5.41542 7.60984C5.40097 7.51017 5.36674 7.41429 5.31468 7.32766C5.26263 7.24103 5.19377 7.16535 5.11203 7.10494C5.0303 7.04454 4.93729 7.00059 4.83832 6.9756C4.73934 6.95061 4.63634 6.94508 4.5352 6.95932C4.43406 6.97356 4.33675 7.00729 4.24884 7.05858C4.16092 7.10988 4.08412 7.17773 4.02282 7.25827C2.69502 8.996 2 11.0302 2 13.1461C2 18.5739 6.48133 23 12 23C17.5187 23 22 18.5841 22 13.1461C22 7.70803 17.529 3.27173 12.0207 3.27173Z"
          fill="#FF9BAD"
        />
        <path
          d="M15.536 9.46787C15.0643 8.99413 14.5019 8.62008 13.8824 8.36799C13.2629 8.11589 12.5989 7.99092 11.93 8.00051C10.6724 8.01163 9.41473 8.51186 8.45758 9.46787C7.7898 10.1237 7.35575 10.9463 7.14429 11.8023C7.02186 12.2692 6.97734 12.7472 7.01073 13.2252V13.2808C7.01073 13.3586 7.02186 13.4253 7.03299 13.5142L7.04412 13.5253V13.5587C7.14429 14.6481 7.61173 15.7041 8.45758 16.5378C9.06641 17.148 9.82348 17.5896 10.6546 17.8196C11.4858 18.0495 12.3624 18.0599 13.1988 17.8496C13.6885 17.7273 14.1671 17.5272 14.6123 17.2604C14.9461 17.0714 15.2578 16.8269 15.536 16.5378C16.3707 15.7041 16.8493 14.6481 16.9495 13.5476C16.9606 13.5476 16.9606 13.5253 16.9606 13.5142C16.9829 13.4364 16.9829 13.3475 16.9829 13.2696C16.9829 13.2585 16.994 13.2363 16.994 13.2141C17.0608 11.869 16.5711 10.4906 15.536 9.46787ZM13.9222 14.9037C13.5995 15.2261 13.0764 15.2261 12.7425 14.9037L12.0079 14.1701L11.2511 14.926C10.9172 15.2595 10.3941 15.2595 10.0714 14.926C9.73749 14.6036 9.73749 14.0811 10.0714 13.7477L10.8282 12.9917L10.0936 12.2581C9.9384 12.1012 9.85134 11.8895 9.85134 11.6689C9.85134 11.4483 9.9384 11.2366 10.0936 11.0797C10.4275 10.7462 10.9506 10.7462 11.2845 11.0797L12.0079 11.8134L12.7091 11.102C13.043 10.7796 13.5661 10.7796 13.9 11.102C14.2227 11.4355 14.2227 11.9579 13.9 12.2914L13.1877 12.9917L13.9222 13.7143C14.2561 14.0478 14.2561 14.5703 13.9222 14.9037Z"
          fill="#FF385C"
        />
      </svg>
    );
  }
);

ReturnDisapprovalTwo.displayName = "ReturnDisapprovalTwo";

export default ReturnDisapprovalTwo;
