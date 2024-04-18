import { CiSearch } from "react-icons/ci";


function SearchInput() {
  return (
      <div className="border-[1px] rounded p-1 bg-bgColor border-[#8c8c8c] flex justify-start items-center mx-10 ">
      <input
        type="text"
              className="bg-bgColor border-hodder outline-none  text-white text-[16px] placeholder-[#8c8c8c]"
              placeholder="Search"
      />
      <CiSearch size="16" color="#8c8c8c" />
    </div>
  );
}

export default SearchInput;
