import { CiSearch } from "react-icons/ci";
const Search = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="  border-none outline-none bg-search-gray rounded-lg h-14 w-search p-4 items-center space-x-2 lg:flex z-50  hidden ">
        <CiSearch className=" text-promo-gray text-2xl" />
        <input
          className="bg-transparent border-none outline-none w-full"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search Products"
        />
      </div>
    </nav>
  );
};

export default Search;
