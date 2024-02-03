import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  handlePageChange: (val: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  handlePageChange,
}) => {
  const [pattern, setPattern] = useState(
    [...new Array(length)].map((_, i) => i + 1)
  );

  useEffect(() => {
    if (currentPage < 4) {
      setPattern([1, 2, 3, 4, 5, 0, totalPage]);
    } else if (currentPage > totalPage - 4) {
      setPattern([
        1,
        0,
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ]);
    } else {
      setPattern([
        1,
        0,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        0,
        totalPage,
      ]);
    }
  }, [currentPage, totalPage]);

  const handleClickPage = (val: number) => {
    handlePageChange(val);
  };

  const handleClickPrev = () => {
    handlePageChange(Number(currentPage) - 1);
  };

  const handleClickNext = () => {
    handlePageChange(Number(currentPage) + 1);
  };

  return (
    <nav>
      <ul className="flex gap-1">
        <li
          className={`flex items-center justify-center p-1 w-8 h-8 border border-gray-300 rounded-md ${
            currentPage === 1
              ? 'bg-primary text-white'
              : 'bg-white cursor-pointer'
          } hover:bg-primary hover:text-white`}
          onClick={currentPage === 1 ? () => {} : () => handleClickPrev()}
        >
          <FaAngleLeft size={14} />
        </li>
        {pattern.map((item, idx) =>
          item === 0 ? (
            <li
              key={idx}
              className={`flex items-center justify-center p-1 w-8 h-8 rounded-md`}
            >
              ...
            </li>
          ) : (
            <li
              key={idx}
              className={`flex items-center justify-center p-1 w-8 h-8 rounded-md border border-gray-300 ${
                currentPage === item
                  ? 'bg-primary text-white'
                  : 'bg-white cursor-pointer hover:bg-primary hover:text-white'
              } `}
              onClick={() => handleClickPage(item)}
            >
              {item}
            </li>
          )
        )}
        <li
          className={`flex items-center justify-center p-1 w-8 h-8 border border-gray-300 rounded-md ${
            currentPage === totalPage
              ? 'bg-primary text-white'
              : 'bg-white cursor-pointer'
          } hover:bg-primary hover:text-white `}
          onClick={
            currentPage === totalPage ? () => {} : () => handleClickNext()
          }
        >
          <FaAngleRight size={14} />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
