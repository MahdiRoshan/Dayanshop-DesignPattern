import { FC } from "react";

import blogImage from "./../../../assets/images/temp/blog-image.jpg";

interface BlogItemProps {
  link?: string;
}

const BlogItem: FC<BlogItemProps> = (props) => {
  const { link } = props;

  return (
    <div className="w-[312px]">
      <a href={link || "#"}>
        <a className="group hover:text-primary">
          <article>
            <img src={blogImage} className="aspect-blog" alt="" />
            <h2 className="text-sm lg:text-base mt-4 font-bold truncate">
              مدل مانتو اداری شیک
            </h2>
            <p className="text-sm lg:text-base text-neutral-400 lg:mt-2 line-clamp-2">
              استایل رسمی زنانه معمولا با مدل مانتو اداری زنانه گره خورده است.
              خانم ها در هر موقعیتی که نیاز دارند استایلی رسمی و در عین حال جذاب
              داشته باشند؛
            </p>
          </article>
        </a>
      </a>
    </div>
  );
};

export default BlogItem;
