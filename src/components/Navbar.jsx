// Import CgMenuRight icon from react-icons/cg
import { CgMenuRight } from "react-icons/cg";

// Import SearchInput component from../components/SearchInput
import SearchInput from "../components/SearchInput";

// Define Navbar component
function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 bg-bgColor container py-4 ">
      <h1 className="text-white text-[24px]">blog.</h1>
      <div className="flex">
        <SearchInput />
        <CgMenuRight size="24" color="white" />
      </div>
    </div>
  );
}

// Export Navbar component
export default Navbar;
