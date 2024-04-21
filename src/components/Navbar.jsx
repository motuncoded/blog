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
      className="flex justify-between items-center   sticky top-0 bg-bgColor container py-4 max-sm:justify-around max-sm:py-3   "
      role="navigation"
      aria-label="Main navigation"
    >
      <h1 className="text-white text-[24px]">blog.</h1>
      <div className="flex items-center max-sm:justify-center  ">
        {searchInput}
        {menuRightIcon}
      </div>
    </div>
  );
}

// Export Navbar component
export default Navbar;
