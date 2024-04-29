import React from "react";
import Previous from "../../../assets/svg/previous.svg";
import Next from "../../../assets/svg/next.svg";
import { PaginationProps } from "../state";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  filteredData,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const range = 2;
  let start = Math.max(1, currentPage - range);
  let end = Math.min(totalPages, currentPage + range);

  if (end - start < range * 2) {
    const diff = range * 2 - (end - start);
    if (start === 1) {
      end = Math.min(totalPages, end + diff);
    } else {
      start = Math.max(1, start - diff);
    }
  }

  const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="flex items-center justify-between m-5">
      {" "}
      <p className="text-md text-gray-500">
        Showing {Math.min(filteredData.length, currentPage * itemsPerPage)} of{" "}
        {filteredData.length} results
      </p>
      <div className="pagination flex items-center text-md text-gray-500">
        <button
          className="flex items-center previous_btn_bg  gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src={Previous} alt="" />
          Previous
        </button>

        <div className="flex items-center">
          {start > 1 && (
            <button
              key={1}
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-2 mx-1 font-semibold text-gray-900 rounded-full hover:bg-gray-200`}
            >
              1
            </button>
          )}
          {start > 2 && (
            <span className="mx-1 font-semibold text-gray-900">...</span>
          )}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-2 mx-1 font-semibold text-gray-900 rounded-full hover:bg-gray-200 ${
                currentPage === number ? "bg-gray-200" : ""
              }`}
            >
              {number}
            </button>
          ))}
          {end < totalPages - 1 && (
            <span className="mx-1 font-semibold text-gray-900">...</span>
          )}
          {end < totalPages && (
            <button
              key={totalPages}
              onClick={() => setCurrentPage(totalPages)}
              className={`px-3 py-2 mx-1 font-semibold text-gray-900 rounded-full hover:bg-gray-200`}
            >
              {totalPages}
            </button>
          )}
        </div>

        <button
          className="flex items-center next_btn_bg gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage))
            )
          }
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          Next
          <img src={Next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
