// Import NavLink component from react-router-dom
import { NavLink } from "react-router-dom";

// Define MenuBar component
function MenuBar() {
  // Define menuItems array
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "General",
      link: "/general",
    },
    {
      id: 3,
      title: "Fashion",
      link: "/fashion",
    },
    {
      id: 4,
      title: "Education",
      link: "/education",
    },
    {
      id: 5,
      title: "Technology",
      link: "/technology",
    },
    {
      id: 6,
      title: "Business",
      link: "/business",
    },
  ];

  // Return JSX
  return (
    <div className=" flex justify-center items-center m-4 max-sm:grid grid-cols-3">
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          className={({ isActive }) =>
            isActive
              ? "active bg-[#ff6f4f] text-white py-2 px-4 rounded-md m-2 transition-all ease-in duration-600"
              : "text-white py-2 px-4 rounded-md m-2 transition-all ease-in-out duration-400"
          }
          aria-current={({ isActive }) => isActive ? "page" : undefined} 
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

// Export MenuBar component
export default MenuBar;
