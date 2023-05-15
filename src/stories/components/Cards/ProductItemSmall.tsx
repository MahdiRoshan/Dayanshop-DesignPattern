import { FC, useRef } from "react";
import ProductImage from "./../../../assets/images/temp/product-bg-white.jpg";
import clsx from "clsx";
import persian from "../../../utility/persian";
import Badge from "../FormElements/Badge";

interface ProductItemSmallProps {
  className?: string;
  link?: string;
}

const ProductItemSmall: FC<ProductItemSmallProps> = (props) => {
  const { link, className } = props;
  const hasOff = useRef(Math.random() < 0.5);
  const price = useRef(Math.round(Math.random() * 1000) * 1000);

  return (
    <div className="w-[156px]">
      <a href={link || "#"} className="block">
        <figure className={clsx(className)}>
          {/* Padding box */}
          <div className="relative p-1 border border-neutral-100 aspect-product">
            <div className="relative h-full">
              <img
                src={ProductImage}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <figcaption className="text-center mt-2">
            {hasOff.current && (
              <div className="flex items-baseline justify-center gap-1">
                <Badge className="text-sm">۵۶٪</Badge>
                <bdi className="truncate">
                  <s className="text-neutral-300">۴۲۵,۰۰۰</s>
                </bdi>
              </div>
            )}
            <p>{persian(price.current).toLocaleString()} تومان</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default ProductItemSmall;
