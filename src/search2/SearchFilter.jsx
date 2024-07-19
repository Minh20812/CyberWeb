import React from "react";

const SearchFilter = ({ dataTakeFromNavbar, onSelect }) => {
  return (
    <div className="absolute top-full left-0 right-0 bg-white text-black mt-1 shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
      {dataTakeFromNavbar.map((results, id) => {
        return (
          <div
            key={id}
            onClick={() => onSelect(results.title)}
            className="cursor-pointer p-2 hover:bg-gray-200"
          >
            {results.title}
          </div>
        );
      })}
    </div>
  );
};

export default SearchFilter;
