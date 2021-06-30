import React from "react";

export default function PaginationItem({ value, currentPage }) {
  return (
    <p
      className={`${
        value === currentPage
          ? "bg-gray-600 text-white"
          : "bg-white text-gray-700 "
      } cursor-pointer flex items-center hover:bg-gray-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 px-4 py-2 mx-1 transition-colors duration-200 transform rounded-md dark:bg-gray-800 dark:text-gray-200 `}
      // onClick={setCurrentPage}
    >
      {value}
    </p>
  );
}
