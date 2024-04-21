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
    <div className=" flex justify-center items-center m-4 max-sm:grid grid-cols-5">
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "white",
              backgroundColor: isActive ? "#ff6f4f" : "inherit",
              padding: isActive ? "8px" : "8px",
              borderRadius: isActive && "5px",
              margin: isActive ? "8px" : "8px",
              transition: isActive ? "all ease-in.6s" : "all ease-in-out.4s",
              width: isActive && "max-content",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

// Export MenuBar component
export default MenuBar;
