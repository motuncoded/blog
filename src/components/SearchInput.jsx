import { CiSearch } from "react-icons/ci";


function SearchInput() {
  return (
      <div className="border-[1px] rounded p-1 bg-bgColor border-gray flex justify-start items-center mx-10 ">
      <input
        type="text"
              className="bg-bgColor border-hodder outline-none  text-white text-[16px] placeholder-gray"
              placeholder="Search"
      />
      <CiSearch size="16" color="gray" />
    </div>
  );
}

export default SearchInput;
