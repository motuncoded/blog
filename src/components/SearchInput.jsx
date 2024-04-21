// Import useState hook from react
import { useState } from "react";

// Import CiSearch icon from react-icons/ci
import { CiSearch } from "react-icons/ci";

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
    <div className="flex flex-col justify-center items-center ">
      <div className="border-[1px] rounded p-1 bg-bgColor border-gray flex justify-start items-center mx-10 ">
        <input
          type="text"
          value={search}
          className="bg-bgColor border-hodder outline-none  text-white text-[16px] placeholder-gray"
          placeholder="Search"
          onChange={handleChange}
        />

        <CiSearch size="16" color="gray" />
      </div>
      <div
        className="flex flex-col   border-[1px] 
      rounded mt-4 absolute top-12
       w-[210px] bg-bgColor border-gray z-40 empty:border-none "
      >
        {menuItems
          .filter((item) => {
            const searchItem = search.toLowerCase();
            const title = item.title.toLowerCase();
            return searchItem && title.startsWith(searchItem);
          })
          .map((item) => (
            <a key={item.id} href={item.link} className="text-white p-2">
              {item.title}
            </a>
          ))}
      </div>
    </div>
  );
}

export default SearchInput;
