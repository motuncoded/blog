// Import useState hook from react
import { useState } from "react";

// Import CiSearch icon from react-icons/ci
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

// Define SearchInput component
function SearchInput() {
  // Define state variable search and its setter function setSearch
  const [search, setSearch] = useState("");

  // Define menuItems array
  const menuItems = [
    {
      id: 1,
      title: "General",
      link: "/general",
    },
    {
      id: 2,
      title: "Fashion",
      link: "/fashion",
    },
    {
      id: 3,
      title: "Education",
      link: "/education",
    },
    {
      id: 4,
      title: "Technology",
      link: "/technology",
    },
    {
      id: 5,
      title: "Business",
      link: "/business",
    },
  ];

  // Define handleChange function to update the search state variable
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center max-sm:hidden ">
      <div
        className="border-[1px] rounded p-[0.3rem] bg-bgColor
       border-gray flex justify-start items-center mx-10">
       
        <input
          type="text"
          value={search}
          className="bg-bgColor  outline-none  text-white text-[16px] placeholder-gray "
          placeholder="Search"
          onChange={handleChange}
          aria-label="Search"
        />

        <CiSearch size="16" color="gray" />
      </div>
      <div
        className="flex flex-col  border-[1px] 
      rounded mt-4 absolute top-12
       w-[210px] bg-bgColor border-gray z-40 empty:border-none ">
      
        {menuItems
          .filter((item) => {
            const searchItem = search.toLowerCase();
            const title = item.title.toLowerCase();
            return searchItem && title.startsWith(searchItem);
          })
          .map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="text-white p-2 max-sm:p-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default SearchInput;
