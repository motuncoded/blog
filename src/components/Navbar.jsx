import { CgMenuRight } from "react-icons/cg";
 import SearchInput from "../components/SearchInput"
function Navbar() {
  return (
    <div className="flex justify-between p-4">
          <h1 className="text-white text-[24px]">blog.</h1>
          <div className="flex justify-between items-center ">
            <SearchInput/>
        <CgMenuRight size="24" color="white" />
          </div>
        </div>
  );
}

export default Navbar;
