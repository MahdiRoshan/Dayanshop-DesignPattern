import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import Button from "../ApplicationUI/Button/Button";

interface NewsletterProps extends ComponentPropsWithoutRef<"input"> {}

const Newsletter = forwardRef<HTMLInputElement, NewsletterProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <div className="flex w-1/2">
        <input
          className={clsx("newsletter-input flex-1", className)}
          type="text"
          ref={ref}
          {...rest}
        />
        <Button variant="secondary" className="w-fit px-6 text-base">
          ثبت شماره
        </Button>
      </div>
    );
  }
);

export default Newsletter;
