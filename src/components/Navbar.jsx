// Import CgMenuRight icon from react-icons/cg
import { CgMenuRight } from "react-icons/cg";

// Import SearchInput component from../components/SearchInput
import SearchInput from "../components/SearchInput";

// Define Navbar component
function Navbar() {
   const searchInput = <SearchInput />;
   const menuRightIcon = (
     <CgMenuRight size="24" color="white" key="menu-right-icon" title="Menu" className="mr-3"/>
   );
  return (
    <div
      className=" container flex justify-between h-[80px] items-center w-max sticky top-0 left-0 bg-bgColor   "
      role="navigation"
      aria-label="Main navigation"
    >
      <h1 className="text-white text-[26px]">blog.</h1>
      <div className="flex justify-center items-center   ">
        {searchInput}
        {menuRightIcon}
      </div>
    </div>
  );
}

// Export Navbar component
export default Navbar;
