import clsx from "clsx";
import { FC } from "react";
import Star from "../../../assets/icons/flat/Star";

interface RateProps {
  count: number;
  size?: number;
  className?: string;
}

const Rate: FC<RateProps> = (props) => {
  const { count, size = 12, className } = props;
  return (
    <div className={clsx("flex items-center", className)}>
      {Array(5)
        .fill(true)
        ?.map((item, index) => (
          <Star
            key={index}
            className={clsx("ml-1 last:ml-2", {
              "text-warning": index < Math.floor(count),
              "text-neutral-100": index >= Math.floor(count),
            })}
            size={size}
          />
        ))}
    </div>
  );
};

export default Rate;
