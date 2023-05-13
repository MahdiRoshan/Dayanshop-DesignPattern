import { forwardRef } from "react";
import { IconSvgProps } from "..";

const Telegram = forwardRef<SVGSVGElement, IconSvgProps>((props, ref) => {
    const { className, size = 24, color = "currentColor", strokeWidth = 1 } = props;

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
            <path d="M3.27364 11.5177C5.1103 10.5707 7.16736 9.77168 9.08798 8.97263C12.3939 7.66063 15.7104 6.37822 19.0584 5.17473C19.7091 4.96756 20.8845 4.77028 21 5.67783C20.937 6.96024 20.6747 8.24265 20.4963 9.5152C20.0449 12.3266 19.5307 15.1183 19.0164 17.9199C18.838 18.857 17.5995 19.3306 16.8019 18.7386C14.8918 17.5352 12.9607 16.3317 11.0821 15.0888C10.4628 14.4969 11.0401 13.6485 11.5858 13.2342C13.1601 11.7742 14.8289 10.5411 16.3192 9.00223C16.718 8.08481 15.532 8.85425 15.1437 9.09101C12.9817 10.4918 10.8826 11.9715 8.61569 13.1947C7.45072 13.7965 6.10734 13.2835 4.94238 12.9481C3.90336 12.5436 2.37106 12.1392 3.27364 11.5177Z" />
        </svg>
    );
});

Telegram.displayName = "Telegram";

export default Telegram;
