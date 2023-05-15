import clsx from "clsx";
import { FC, useRef, useState } from "react";
import UserLogout from "../../../assets/icons/flat/UserLogout";
import persian from "../../../utility/persian";
import Button from "../ApplicationUI/Button/Button";
import Condition from "../Condition";
import CountDownTimer from "../CountDownTimer";
import Badge from "../FormElements/Badge";

import CampaignImage from "./../../../assets/images/temp/campaign-title.png";
import ProductWhiteImage from "./../../../assets/images/temp/product-bg-white.jpg";
import ProductImage from "./../../../assets/images/temp/product.png";

interface ProductItemLargeProps {
  hasCampaign?: boolean;
  isPremium?: boolean;
  className?: string;
  link?: string;
}

const ProductItemLarge: FC<ProductItemLargeProps> = (props) => {
  const { className, hasCampaign, isPremium, link } = props;
  const [isLiked, setLiked] = useState(false);

  const hasOff = useRef(Math.random() < 0.5);
  const price = useRef(Math.round(Math.random() * 1000) * 1000);

  return (
    <div className="w-[273px]">
      <a href={link || "#"} className={clsx("relative block group", className)}>
        <figure>
          {/* image padding box */}
          <div className="bg-white border p-2 lg:p-3 aspect-product">
            <div className="relative h-full overflow-hidden">
              {/* Campaign banner */}
              <Condition if={hasCampaign}>
                <div
                  className={clsx(
                    "lg:p-2 bg-white/90",
                    "flex justify-between items-center",
                    "h-8 absolute top-1.5 lg:top-2 right-1.5 left-1.5"
                  )}
                >
                  <img className="flex-1 w-[50%]" src={CampaignImage} alt="" />
                  <CountDownTimer
                    className="font-bold text-xs lg:text-base flex-1 text-left"
                    hours={13}
                    minutes={59}
                    seconds={59}
                  />
                </div>
              </Condition>
              <img
                src={ProductWhiteImage}
                alt=""
                className={clsx("w-full h-full object-cover object-center", {
                  "group-hover:hidden": !isPremium,
                  "blur-md": isPremium,
                })}
              />
              {/* hover image */}
              <Condition if={!isPremium}>
                <img
                  src={ProductImage}
                  alt=""
                  className="w-full h-full object-cover object-center hidden group-hover:block"
                />
              </Condition>
              {/* Attribute label */}
              <div className="flex items-stretch lg:justify-end absolute bottom-0 right-0 w-full">
                <Badge className="lg:hidden text-sm">۵۶٪</Badge>
                <p
                  className={clsx(
                    "bg-neutral-500",
                    "text-white text-xs lg:text-sm",
                    "px-1.5 py-1"
                  )}
                >
                  تک سایز: XL
                </p>
              </div>
              {/* Premium users overlay */}
              <Condition if={isPremium}>
                <div
                  className={clsx(
                    "bg-white/60",
                    "absolute top-0 right-0 w-full h-full",
                    "flex flex-col items-center justify-center"
                  )}
                >
                  <p className="text-center">
                    برای مشاهده ٪۵۶ تخفیف این محصول، وارد حساب کاربری شوید
                  </p>
                  <Button variant="secondary" size="sm" className="px-6 mt-5">
                    <UserLogout className="inline ml-2" size={20} />
                    ورود
                  </Button>
                </div>
              </Condition>
            </div>
          </div>
          {/* Title container */}
          <div className="mt-2 lg:mt-5 flex items-center gap-2">
            <p
              className="truncate font-bold text-sm lg:text-base"
              title="کفش نایک مردانه سایز ۴۱ رنگ مشکلی و سفید با آرم نایک"
            >
              کفش نایک مردانه سایز ۴۱ رنگ مشکلی و سفید با آرم نایک
            </p>
            {/* <Like
            isLiked={isLiked}
            onChange={setLiked}
            size={20}
            className="mr-10"
          /> */}
          </div>

          <div className="flex items-center gap-2 mt-2">
            {hasOff.current && <Badge className="hidden lg:block">۵۶٪</Badge>}
            {hasOff.current && (
              <span className="text-neutral-300 text-sm line-through">
                {persian(price.current + price.current * 0.56).toLocaleString()}
              </span>
            )}
            <p className="text-sm lg:text-base font-medium">
              {persian(price.current).toLocaleString()} تومان
            </p>
          </div>
        </figure>
      </a>
    </div>
  );
};

export default ProductItemLarge;
