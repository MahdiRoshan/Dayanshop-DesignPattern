import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, ReactElement } from "react";
import { IconSvgProps } from "../../../assets/icons";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
  icon?: ReactElement<IconSvgProps>;
}

const Search = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { icon, className, ...rest } = props;

  return (
    <div
      className="flex items-center gap-3 border-0 
      bg-neutral-50 lg:bg-transparent lg:!border-b lg:!border-neutral-500 
      px-4 lg:px-0 py-2 lg:py-4  
    "
    >
      {icon}
      <input className={clsx("search-input", className)} ref={ref} {...rest} />
    </div>
  );
});

export default Search;
