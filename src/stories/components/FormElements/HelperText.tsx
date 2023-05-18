import clsx from "clsx";
import { FC } from "react";
import Alert from "../../../assets/icons/flat/Alert";

interface HelperTextProps {
  className?: string;
}

const HelperText: FC<HelperTextProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx("flex items-center gap-1 text-sm", className)}>
      <Alert size={16} />
      <p>متن راهنما</p>
    </div>
  );
};

export default HelperText;
