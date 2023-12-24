import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setText, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="relative text-center w-1/3  m-6">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search..."
        className="w-full h-10 px-4 py-2 text-gray-700 placeholder-gray-500 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-4 focus:outline-none"
      >
        <FaSearch />
        <i className="fas fa-search text-gray-500"></i>
      </button>
    </form>
  );
};

export default SearchBar;
