import clsx from "clsx";
import { FC, useRef } from "react";
import Badge from "../FormElements/Badge";

import ProductImage from "./../../../assets/images/temp/product-bg-white.jpg";

interface ProductItemMediumProps {
  className?: string;
  link?: string;
}

const ProductItemMedium: FC<ProductItemMediumProps> = (props) => {
  const { link, className } = props;
  const hasOff = useRef(Math.random() < 0.3);

  return (
    <div className="w-[216px]">
      <a href={link || "#"} className="block">
        <figure className={clsx("lg:p-4 p-3", className)}>
          <div className="bg-white aspect-product relative">
            <img
              src={ProductImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            {/* Off badge */}
            {hasOff.current && (
              <Badge className="absolute lg:top-2 lg:right-2 top-0 right-0 lg:py-1 py-0.5 text-sm">
                ۵۶٪
              </Badge>
            )}

            {/* Attribute label */}
            <p
              className={clsx(
                "absolute bottom-0 left-0 z-10",
                "bg-neutral-500 text-white text-sm",
                "px-1.5 lg:py-1 py-0.5"
              )}
            >
              تک سایز: XL
            </p>
          </div>
          <figcaption className="text-center mt-4">
            <p className="truncate mt-2 text-base font-bold">
              {" "}
              کفش نایک مردانه سایز ۴۱ رنگ مشکلی و سفید با آرم نایک
            </p>
            {/* Price block */}
            <p className="mt-2 text-base font-medium">
              {hasOff.current && (
                <s className="text-neutral-300 inline-block ml-1.5">۴۲۵,۰۰۰</s>
              )}
              <span>۳۶۹,۰۰۰ تومان</span>
            </p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default ProductItemMedium;
