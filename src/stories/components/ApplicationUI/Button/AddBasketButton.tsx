import clsx from "clsx";
import { FC, useState } from "react";
import Check from "../../../../assets/icons/flat/Check";
import Shopping from "../../../../assets/icons/flat/Shopping";

interface AddBasketButtonProps {}

const AddBasketButton: FC<AddBasketButtonProps> = (props) => {
  const {} = props;
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx("add-basket-btn flex items-center gap-2", {
        "bg-success": clicked,
      })}
    >
      {!clicked ? (
        <>
          <span>افزودن به سبد خرید</span>
          <Shopping />
        </>
      ) : (
        <>
          <span>به سبد خرید اضافه شد</span>
          <Check />
        </>
      )}
    </button>
  );
};

export default AddBasketButton;
