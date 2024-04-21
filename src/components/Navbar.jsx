// Import CgMenuRight icon from react-icons/cg
import { CgMenuRight } from "react-icons/cg";

// Import SearchInput component from../components/SearchInput
import SearchInput from "../components/SearchInput";

// Define Navbar component
function Navbar() {
   const searchInput = <SearchInput />;
   const menuRightIcon = (
     <CgMenuRight size="24" color="white" key="menu-right-icon" title="Menu" "/>
   );
  return (
    <div
      className=" flex justify-between h-[80px] items-center w-[100%] sticky top-0 left-0 bg-bgColor   "
      role="navigation"
      aria-label="Main navigation"
    >
      <h1 className="text-white text-[26px]">blog.</h1>
      <div className="flex justify-center items-center max-sm:ml-4   ">
        {searchInput}
        {menuRightIcon}
      </div>
    </div>
  );
}

// Export Navbar component
export default Navbar;
