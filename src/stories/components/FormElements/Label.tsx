import {
  forwardRef,
  ComponentPropsWithoutRef,
  ReactNode,
  useState,
} from "react";
import clsx from "clsx";
import Copy from "../../../assets/icons/flat/Copy";
import Check from "../../../assets/icons/flat/Check";

interface LabelProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

const Label = forwardRef<HTMLSpanElement, LabelProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <span
      onClick={handleClick}
      className={clsx(
        "flex items-center gap-1 text-sm cursor-pointer",
        {
          "text-success": clicked,
        },
        className
      )}
      ref={ref}
      {...rest}
    >
      {clicked ? (
        <>
          <Check size={16} />
          لینک کپی شد!
        </>
      ) : (
        <>
          <Copy size={16} />
          کپی لینک
        </>
      )}
    </span>
  );
});

export default Label;
