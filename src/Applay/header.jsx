import { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Head = () => {
  const searchRef = useRef();

  const handleSearch = () => {
    const value = searchRef.current.value;
    console.log("Search:", value);
    searchRef.current.value = "";
  };
  return (
    <>
      <header className="bg-black text-white px-10 h-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 text-2xl font-bold">F</h1>

          <nav className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:text-white text-xl"
                  : "text-white hover:text-red-400 text-xl"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:text-white text-xl"
                  : "text-white  hover:text-red-400 text-xl"
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/mylist"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 hover:text-white text-xl"
                  : "text-white  hover:text-red-400 text-xl"
              }
            >
              My List
            </NavLink>
          </nav>
        </div>

        {/* Search */}

        <div className="flex gap-2 items-center">
          {/* Search Input with Icon */}
          <div className="relative">
            <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              ref={searchRef}
              type="text"
              placeholder="Search movie..."
              className="bg-gray-800 text-white h-12 w-120 pl-10 pr-3 py-1 rounded outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-red-600 px-4 py-1 rounded h-12 w-25 hover:bg-red-700"
          >
            Search
          </button>
        </div>
      </header>
    </>
  );
};
export default Head;
