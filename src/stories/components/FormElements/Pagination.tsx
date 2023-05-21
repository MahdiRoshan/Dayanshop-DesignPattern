import clsx from "clsx";
import { FC, useState } from "react";
import Chevron from "../../../assets/icons/flat/Chevron";
import persian from "../../../utility/persian";

interface PaginationProps {
  total: number;
  current: number;
  onChange?: (page: number) => void;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { total, onChange, current } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const next = (page: number) => {
    setCurrentPage(page);
  };

  const prev = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center">
      <button
        disabled={currentPage <= 1}
        onClick={() => prev(currentPage > 1 ? currentPage - 1 : currentPage)}
        className="flex justify-center items-center ml-0.5 h-8 w-8 disabled:text-neutral-300"
      >
        <Chevron className="rotate-180" size={16} />
      </button>
      {Array(total)
        .fill(true)
        .map((element, index) => {
          if (index + 1 === currentPage) {
            return (
              <button
                className={clsx(
                  "flex items-center justify-center leading-none h-8 w-8",
                  "text-white bg-black text-base font-extrabold"
                )}
                key={index}
                onClick={() => onChange?.(index + 1)}
              >
                {persian(index + 1)}
              </button>
            );
          }

          if (
            // First and last page are always available
            index + 1 === 1 ||
            index + 1 === total ||
            // One before active page one after that
            index + 1 === currentPage - 1 ||
            index + 1 === currentPage + 1 ||
            // If we are in first or last page two siblings should be visible
            (currentPage === 1 &&
              currentPage === total &&
              (index + 1 === currentPage - 2 || index + 1 === currentPage + 2))
          ) {
            return (
              <button
                className={clsx(
                  "flex items-center justify-center leading-none h-8 w-8",
                  "text-black font-medium"
                )}
                key={index}
                onClick={() => onChange?.(index + 1)}
              >
                {persian(index + 1)}
              </button>
            );
          }

          if (index + 1 === total - 1 || index + 1 === 2) {
            return (
              <span
                className={clsx(
                  "flex items-center justify-center leading-none h-8 w-8",
                  "text-neutral-300 font-medium self-baseline"
                )}
              >
                ...
              </span>
            );
          }
        })}
      <button
        disabled={currentPage >= total}
        onClick={() =>
          next(currentPage < total ? currentPage + 1 : currentPage)
        }
        className="flex justify-center items-center ml-0.5 h-8 w-8 disabled:text-neutral-300"
      >
        <Chevron size={16} />
      </button>
    </div>
  );
};

export default Pagination;
