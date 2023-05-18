import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import Dislike from "../../../assets/icons/flat/Dislike";
import Like from "../../../assets/icons/flat/Like";

interface ReactionProps extends ComponentPropsWithoutRef<"button"> {
  isLink?: boolean;
  className?: string;
  reactType?: "dislike" | "like";
}

const Reaction = forwardRef<HTMLButtonElement, ReactionProps>((props, ref) => {
  const { isLink, className, reactType, ...rest } = props;
  const [select, setSelect] = useState<boolean>(false);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "reaction",
        {
          "bg-success hover:bg-success border-none": select,
          "!bg-primary-500 hover:bg-primary-500 border-none":
            select && reactType === "dislike",
        },
        { "reaction-link": isLink },
        className
      )}
      ref={ref}
      {...rest}
    >
      {reactType === "dislike" ? (
        <Dislike
          className={clsx("text-primary-500", { "text-white": select })}
        />
      ) : (
        <Like className={clsx("text-success", { "text-white": select })} />
      )}
    </button>
  );
});

export default Reaction;
