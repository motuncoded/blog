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
    topics: "12",
    color: "bg-ghostWhite",
    icon: <IoIosArrowForward />,
    link: "/general",
  },
  {
    id: 2,
    logo: <FaShoppingBag size="24" />,
    title: "Fashion",
    topics: "15",
    color: "bg-green",
    icon: <IoIosArrowForward />,
    link: "/fashion",
  },
  {
    id: 3,
    logo: <IoIosSchool size="24" />,
    title: "education",
    topics: "10",
    color: "bg-orange",
    icon: <IoIosArrowForward />,
    link: "/education",
  },
  {
    id: 4,
    logo: <GrTechnology size="24" />,
    title: "technology",
    topics: "40",
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
      <div className="mt-6 grid grid-cols-4 gap-4 max-sm:grid  max-sm:grid-cols-1 max-md:grid max-md:grid-cols-2 max-lg:grid  max-lg:grid-cols-2">
        {sections.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.color} p-2 h-[250px] rounded-tl-2xl rounded-br-2xl max-sm:w-auto`}
            >
              <h5 className="text-black">{item.logo}</h5>
              <div className=" mt-40 flex justify-between  items-center">
                <div>
                  <h6 className="text-black capitalize">{item.title}</h6>
                  <p className="font-light">{item.topics} topics</p>
                </div>
                <Link
                  to={item.link}
                  className="border p-2 flex justify-end items-center "
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
