import clsx from "clsx";
import { FC, useState } from "react";
import FavoriteActive from "../../../../assets/icons/flat/FavoriteActive";
import FavoriteDeactive from "../../../../assets/icons/flat/FavoriteDeactive";
import Tooltip from "../Tooltip/Tooltip";

interface FavoriteButtonProps {
  className?: string;
}

const FavoriteButton: FC<FavoriteButtonProps> = (props) => {
  const { className, ...rest } = props;
  const [select, setSelect] = useState<boolean>(false);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <Tooltip content="اضافه به علاقه‌مندی" placement="bottom">
      <button
        onClick={handleClick}
        className={clsx("favorite-btn group/favorite", className, {
          "border-primary-300": select,
        })}
        {...rest}
      >
        {select ? (
          <FavoriteActive className="text-primary-500" />
        ) : (
          <FavoriteDeactive className="group-hover/favorite:text-primary-500" />
        )}
      </button>
    </Tooltip>
  );
};

export default FavoriteButton;
