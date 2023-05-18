import { FC } from "react";
import Minus from "../../../assets/icons/flat/Minus";
import Plus from "../../../assets/icons/flat/Plus";

interface ZoomProps {}

const Zoom: FC<ZoomProps> = (props) => {
  const {} = props;
  return (
    <div className="flex items-center gap-4">
      <button className="p-4 border rounded-full">
        <Plus />
      </button>
      <button className="p-4 border rounded-full">
        <Minus />
      </button>
    </div>
  );
};

export default Zoom;
