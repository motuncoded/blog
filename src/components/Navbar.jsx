import { CgMenuRight } from "react-icons/cg";
 import SearchInput from "../components/SearchInput"
function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 bg-bgColor container p-4">
          <h1 className="text-white text-[24px]">blog.</h1>
          <div className="flex">
          <SearchInput/>
        <CgMenuRight size="24" color="white" />
          </div>
        </div>
  );
}

export default Navbar;
