import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";

const Category = ({ data, isCollapsed, setShowIndex }) => {
  const { title, itemCards } = data;

  return (
    <div className="text-left shadow-md mb-4 mt-5 p-5 m-5">
      <div
        className="p-1 pb-3 flex justify-between font-black cursor-pointer"
        onClick={setShowIndex}
      >
        {title} ({itemCards?.length})
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          {isCollapsed ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          )}
        </svg>
      </div>
      {isCollapsed ? (
        <div></div>
      ) : (
        <div>
          <ItemsList data={itemCards} />
        </div>
      )}
      <div className="bg-gray-200 h-4"></div>
    </div>
  );
};

export default Category;
