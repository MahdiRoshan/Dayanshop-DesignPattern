import { isDisabled } from "@testing-library/user-event/dist/utils";
import clsx from "clsx";
import { Children, FC, ReactElement, useState } from "react";

interface FeatureButtonProps {
  isDisable?: boolean;
  children: ReactElement;
  className?: string;
}

const FeatureButton: FC<FeatureButtonProps> = (props) => {
  const { isDisable, children, className, ...rest } = props;
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx("feature-btn group/feature", className, {
        "border-neutral-500 hover:border-neutral-500": selected,
      })}
      disabled={isDisable}
      {...rest}
    >
      {children}
    </button>
  );
};

export default FeatureButton;
