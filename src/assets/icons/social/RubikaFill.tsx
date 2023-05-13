import { forwardRef } from "react";
import { IconSvgProps } from "..";

const RubikaFill = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
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
        d="M10.4356 2.54269C10.919 2.26962 11.4399 2.02074 12.0051 2C12.0085 3.17179 12.0051 4.34359 12.0051 5.51538C11.9983 5.92326 12.0153 6.33114 11.9983 6.73903L11.9915 6.74248C11.3957 6.38299 10.7794 6.05807 10.1734 5.70895C9.29165 5.2112 8.40986 4.7169 7.52808 4.21915C8.49498 3.65572 9.46528 3.10266 10.4356 2.54269Z"
        fill="#B8B8B8"
      />
      <path
        d="M12.0051 2C12.6622 2.01037 13.2512 2.35949 13.8129 2.67404C14.6981 3.18908 15.5935 3.69029 16.4753 4.21569C15.2292 4.91047 13.99 5.61217 12.7473 6.3104C12.4988 6.45558 12.2434 6.58348 12.0017 6.73903C12.0221 6.33114 12.0051 5.92326 12.0085 5.51538C12.0051 4.34359 12.0085 3.17179 12.0051 2Z"
        fill="#969696"
      />
      <path
        d="M16.4719 4.21565L16.4855 4.20874L16.4957 4.21911C16.4855 5.94051 16.4991 7.66536 16.4889 9.38676L16.4719 9.39713C14.9841 8.50532 13.4827 7.63425 11.9983 6.73899C12.24 6.58344 12.4954 6.45554 12.7439 6.31036C13.9866 5.61213 15.2258 4.91043 16.4719 4.21565Z"
        fill="#8E8E8E"
      />
      <path
        d="M4.49118 5.98891C5.48872 5.39437 6.49648 4.81366 7.50083 4.22949C7.50423 5.95089 7.49742 7.67574 7.50423 9.39714C7.04462 9.16554 6.60542 8.89247 6.15262 8.65051C5.20955 8.11128 4.25627 7.59278 3.32001 7.04664C3.58216 6.57308 4.03497 6.25161 4.49118 5.98891Z"
        fill="#919191"
      />
      <path
        d="M7.50085 4.22949L7.52809 4.21912C8.40988 4.71687 9.29166 5.21117 10.1734 5.70892C10.7795 6.05458 11.3957 6.38296 11.9915 6.74245C10.5139 7.61697 9.03972 8.49495 7.56214 9.36602C7.54852 9.37294 7.52128 9.39022 7.50766 9.39713C7.49745 7.67574 7.50426 5.95088 7.50085 4.22949Z"
        fill="#B3B3B3"
      />
      <path
        d="M16.4958 4.21912C17.4763 4.78255 18.45 5.35634 19.4203 5.93014C19.9071 6.21359 20.428 6.52122 20.6936 7.04663C19.3011 7.83474 17.9053 8.61248 16.5128 9.40059L16.489 9.38676C16.4958 7.66537 16.4855 5.94397 16.4958 4.21912Z"
        fill="#B1B1B1"
      />
      <path
        d="M11.9915 6.74247L11.9983 6.73901C13.4827 7.63428 14.9841 8.50535 16.4719 9.39715C14.9875 10.2509 13.4895 11.0805 11.9983 11.9205C11.2697 11.5195 10.5445 11.1013 9.81595 10.6968C9.06694 10.2682 8.30772 9.85343 7.55872 9.42135C7.55872 9.40752 7.55872 9.37641 7.55872 9.36259C9.03971 8.49152 10.5139 7.61699 11.9915 6.74247Z"
        fill="white"
      />
      <path
        d="M3.0715 7.8382C3.11916 7.56512 3.18044 7.28859 3.32003 7.04663C4.25969 7.59278 5.20957 8.11127 6.15264 8.6505C6.60545 8.89592 7.04464 9.169 7.50426 9.39713L7.50085 9.40059C5.99943 10.282 4.49801 11.1738 3 12.0622C3.00681 11.1807 3 10.3028 3.0034 9.42133C3.0034 8.89592 2.98638 8.3636 3.0715 7.8382Z"
        fill="#7A7A7A"
      />
      <path
        d="M16.5128 9.40413C17.9052 8.61602 19.3011 7.83482 20.6936 7.05017C20.9013 7.44077 20.9625 7.88667 20.9966 8.31875C21 9.57005 20.9966 10.8213 20.9966 12.0726L20.9728 12.0761C20.8876 11.9759 20.7651 11.9275 20.6561 11.8618C19.2773 11.0391 17.8916 10.2268 16.5128 9.40413Z"
        fill="#5B5B5B"
      />
      <path
        d="M7.50426 9.3972C7.51788 9.39028 7.54511 9.373 7.55873 9.36609C7.55873 9.37992 7.55873 9.41102 7.55873 9.42485C8.30433 9.86039 9.06356 10.2752 9.81597 10.7003C10.5445 11.1048 11.2663 11.5196 11.9983 11.924C11.9983 13.6558 12.0051 15.3875 11.9949 17.1158C10.4969 16.2759 9.00227 15.4325 7.50766 14.5925L7.50085 14.589C7.50766 12.8607 7.50085 11.129 7.50085 9.40066L7.50426 9.3972Z"
        fill="#E4E4E4"
      />
      <path
        d="M16.4719 9.39721L16.4889 9.38684C16.4923 11.1221 16.4889 12.8573 16.4889 14.5925L16.4821 14.596C14.9841 15.429 13.4929 16.2793 11.9949 17.1158C12.0051 15.3841 11.9983 13.6523 11.9983 11.924C13.4895 11.0806 14.9875 10.251 16.4719 9.39721Z"
        fill="#F1F1F1"
      />
      <path
        d="M16.489 9.38684L16.5128 9.40067C17.8916 10.2233 19.2773 11.0391 20.6596 11.8583C20.7685 11.924 20.8911 11.9758 20.9762 12.0726C19.4782 12.9057 17.9904 13.7595 16.489 14.5891C16.489 12.8573 16.489 11.1221 16.489 9.38684Z"
        fill="#454545"
      />
      <path
        d="M3 12.0623C4.49801 11.1705 5.99943 10.2821 7.50085 9.39722C7.50085 11.1255 7.50426 12.8538 7.50085 14.5856C6.60545 14.1051 5.72707 13.5901 4.83847 13.0958C4.22905 12.7536 3.62304 12.4114 3.01702 12.0692L3 12.0623Z"
        fill="#5B5B5B"
      />
      <path
        d="M3.01365 12.0726C3.62306 12.4148 4.22908 12.757 4.83509 13.0992C5.72369 13.5901 6.60207 14.1086 7.49747 14.5891L7.50428 14.5925C6.12202 15.4048 4.74658 16.2275 3.36432 17.0433C3.10897 16.6285 3.04769 16.1272 3.01365 15.6502C2.983 14.7169 3.00684 13.7837 3.00003 12.8504C3.01024 12.5877 2.98981 12.3284 3.01365 12.0726Z"
        fill="#454545"
      />
      <path
        d="M16.4889 14.5925C17.9904 13.7629 19.4782 12.9091 20.9762 12.0761L21 12.0726C21 13.1373 21 14.2019 21 15.2665C21.0102 15.8715 20.9591 16.5178 20.6425 17.0502C19.4543 16.3519 18.2695 15.6433 17.0813 14.9416C16.8805 14.8276 16.6898 14.6997 16.4855 14.596L16.4889 14.5925Z"
        fill="#7A7A7A"
      />
      <path
        d="M3.36768 17.0397C4.74993 16.224 6.12538 15.4013 7.50764 14.589C7.49402 16.3173 7.50424 18.0456 7.50424 19.7774C6.72118 19.3211 5.93473 18.8717 5.15167 18.4155C4.82824 18.2254 4.5014 18.0456 4.18818 17.8348C3.87155 17.6204 3.56855 17.3716 3.36768 17.0397Z"
        fill="#5C5C5C"
      />
      <path
        d="M7.50763 14.589C9.00224 15.4324 10.5003 16.2758 11.9949 17.1123L12.0017 17.1158C10.4968 17.9868 9.00905 18.889 7.50763 19.767L7.50082 19.7705C7.50423 18.0491 7.49401 16.3208 7.50763 14.589Z"
        fill="#A0A0A0"
      />
      <path
        d="M11.9949 17.1158C13.4929 16.2793 14.9841 15.429 16.4821 14.5959C16.4991 16.3243 16.4821 18.056 16.4889 19.7843L16.4787 19.7774C14.9909 18.8856 13.4929 18.0111 12.0017 17.1193L11.9949 17.1158Z"
        fill="#B3B3B3"
      />
      <path
        d="M16.4821 14.5959C16.6864 14.6996 16.8805 14.8275 17.0779 14.9416C18.2661 15.6433 19.4509 16.3485 20.6391 17.0501C20.4587 17.3785 20.1523 17.6067 19.8526 17.8175C19.393 18.1217 18.9062 18.3844 18.4329 18.6644C17.7861 19.0377 17.1358 19.411 16.4889 19.7843C16.4821 18.056 16.4991 16.3243 16.4821 14.5959Z"
        fill="#919191"
      />
      <path
        d="M7.51105 19.7739C9.00906 18.8925 10.5003 17.9937 12.0051 17.1227C12.0085 18.7507 12.0085 20.3754 12.0051 22.0034C11.6238 21.9896 11.2459 21.8859 10.9122 21.6992C9.77509 21.0563 8.63456 20.4272 7.51105 19.7739Z"
        fill="#969696"
      />
      <path
        d="M12.0051 17.1193C13.4963 18.0111 14.9943 18.8856 16.4821 19.7774C15.9851 20.0712 15.4744 20.3477 14.9705 20.6346C14.2896 21.0149 13.6121 21.402 12.9312 21.7822C12.6418 21.9171 12.3252 22.0069 12.0051 22C12.0051 20.3719 12.0051 18.7473 12.0051 17.1193Z"
        fill="#B8B8B8"
      />
    </svg>
  );
});

RubikaFill.displayName = "RubikaFill";

export default RubikaFill;
