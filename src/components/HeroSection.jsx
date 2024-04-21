// Import GrTechnology icon from react-icons/gr
import { GrTechnology } from "react-icons/gr";

// Import CgController icon from react-icons/cg
import { CgController } from "react-icons/cg";

// Import IoIosArrowForward icon from react-icons/io
import { IoIosArrowForward } from "react-icons/io";

// Import IoIosSchool icon from react-icons/io
import { IoIosSchool } from "react-icons/io";

// Import FaShoppingBag icon from react-icons/fa
import { FaShoppingBag } from "react-icons/fa";

// Import Link component from react-router-dom
import { Link } from "react-router-dom";

// Define sections array
const sections = [
  {
    id: 1,
    logo: <CgController size="24" />,
    title: "general",
    color: "bg-ghostWhite",
    icon: <IoIosArrowForward />,
    link: "/general",
  },
  {
    id: 2,
    logo: <FaShoppingBag size="24" />,
    title: "Fashion",
    color: "bg-green",
    icon: <IoIosArrowForward />,
    link: "/fashion",
  },
  {
    id: 3,
    logo: <IoIosSchool size="24" />,
    title: "education",
    color: "bg-orange",
    icon: <IoIosArrowForward />,
    link: "/education",
  },
  {
    id: 4,
    logo: <GrTechnology size="24" />,
    title: "technology",
    color: "bg-white",
    icon: <IoIosArrowForward />,
    link: "/technology",
  },
];

// Define HeroSection component
function HeroSection() {
  return (
    <div className="mt-10">
      <h4 className="text-2xl text-white text-center">Popular Sections</h4>
      <div className="mt-6 grid grid-cols-4 place-content-center p-4 gap-4
       max-sm:grid  max-sm:grid-cols-1 max-sm:ml-0  max-md:grid max-md:grid-cols-2 max-lg:grid  max-lg:grid-cols-2">
        {sections.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.color} flex flex-col 
              p-4 h-[250px] rounded-tl-2xl rounded-br-2xl max-sm:h-[165px] `}
            >
              {" "}
                <h5
                  className="text-black "
                  aria-label={`Section ${item.title}`}
                >
                  {item.logo}
                </h5>
              <div className=" mt-[17rem] flex justify-between max-sm:mt-20">
                <div>
                  <h6 className="text-black capitalize">{item.title}</h6>
                </div>
                <Link
                  to={item.link}
                  className="border p-1 flex justify-end items-center "
                  aria-label={`Go to ${item.title} section`}
                  aria-current={
                    item.link === window.location.pathname ? "page" : null
                  }
                >
                  {item.icon}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export HeroSection component
export default HeroSection;
