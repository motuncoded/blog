import { NavLink } from "react-router-dom";
function MenuBar() {
    const menuItems = [
      {
        id: 1,
        title: "General",
        link: "/general",
        color: "bg-orange",
      },
      {
        id: 2,
        title: "Fashion",
        link: "/fashion",
        color: "bg-orange",
      },
      {
        id: 3,
        title: "Education",
        link: "/education",
        color: "bg-orange",
      },
      {
        id: 4,
        title: "Technology",
        link: "/technology",
        color: "bg-orange",
      },
    ];


  return (
    <div className=" flex justify-center items-center m-4">
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.link}
          style={({ isActive }) => {
            return {
                color: isActive ? "white" : "white",
                backgroundColor: isActive ? "#ff6f4f" : 'inherit',
                padding: isActive ? "10px" : "10px",
                borderRadius: isActive && "5px",
                margin: isActive ? "1rem" : "1rem",
                transition :isActive ? "all ease-in .6s" : "all ease-in-out .4s"
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

export default MenuBar
