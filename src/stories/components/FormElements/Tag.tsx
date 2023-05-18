import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface TagProps extends ComponentPropsWithoutRef<"span"> {
  isOutline?: boolean;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const { className, isOutline, children, ...rest } = props;

  return (
    <span
      className={clsx("tags", { "tags-outline": isOutline }, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  );
});

Tag.displayName = "Tag";

export default Tag;
