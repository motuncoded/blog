

import { CgController } from "react-icons/cg";
import { IoIosArrowForward, IoIosSchool } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";

 const sections = [
   {
     id: 1,
     logo: <CgController size="24" />,
     title: "general",
     topics: "12",
     color: "bg-ghostWhite",
     icon: <IoIosArrowForward />,
   },
   {
     id: 2,
     logo: <FaShoppingBag size="24" />,
     title: "Fashion",
     topics: "15",
     color: "bg-green",
     icon: <IoIosArrowForward />,
   },
   {
     id: 3,
     logo: <IoIosSchool size="24" />,
     title: "education",
     topics: "10",
     color: "bg-orange",
     icon: <IoIosArrowForward />,
   },
   {
     id: 4,
     logo: <MdHowToVote size="24" />,
     title: "politics",
     topics: "40",
     color: "bg-white",
     icon: <IoIosArrowForward />,
   },
 ];
function HeroSection() {

   
  return (
    <div>
      <h4 className="text-2xl text-white text-center">Popular Sections</h4>
          <div className="mt-6 grid grid-cols-4 gap-4  ">
              {sections.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`${item.color} p-2 h-[250px] rounded-tl-2xl rounded-br-2xl`}
                    >
                      <h5 className="text-black">{item.logo}</h5>
                        <div className=" mt-40 flex justify-between  items-center">
                          <div>
                            <h6 className="text-black capitalize">
                              {item.title}
                            </h6>
                            <p className="font-light">{item.topics} topics</p>
                          </div>
                          <button type="submit" className="border p-2 flex justify-end items-center ">
                            {item.icon}
                          </button>
                        </div>
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

export default HeroSection
