import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import persian from "../../../utility/persian";

interface CountdownTimerProps {
    hours: number;
    minutes: number;
    seconds: number;
    className?: string;
    onEnd?: () => void;
}

const CountDownTimer = forwardRef<HTMLParagraphElement, CountdownTimerProps>((props, ref) => {
    const { className, hours, minutes, seconds, onEnd } = props;

    const [time, setTime] = useState<Pick<CountdownTimerProps, "hours" | "minutes" | "seconds">>({
        hours,
        minutes,
        seconds,
    });


    const calculateTime = () => {
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) reset();
        else if (time.hours !== 0 && time.seconds === 0) {
            setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
        } else if (time.hours !== 0 && time.minutes === 0 && time.seconds === 0) {
            setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
        } else if (time.seconds === 0) {
            setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
        } else {
            setTime({ hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1 });
        }
    };

    const reset = () => {
        setTime({ hours: time.hours, minutes: time.minutes, seconds: time.seconds });
        onEnd?.();
    };

    useEffect(() => {
        const timerId = setInterval(() => calculateTime(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <p className={clsx(className)} ref={ref}>
            <bdi>
                {` 
                    ${persian(Number(time.hours.toString().padStart(2, "0")))}  : 
                    ${persian(Number(time.minutes.toString().padStart(2, "0")))} : 
                    ${persian(Number(time.seconds.toString().padStart(2, "0")))}
                `}
            </bdi>
        </p>
    );
});

export default CountDownTimer;
