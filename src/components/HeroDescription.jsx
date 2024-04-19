
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoApple } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function HeroDescription() {
  return (
    <div className="flex justify-between items-center px-4 max-sm:grid grid-cols-1 max-lg:grid ">
      <div className="text-white w-[700px] max-sm:w-auto max-md:w-auto ">
        <h2 className="text-5xl leading-tight font-bold	 max-sm:text-4xl">
          blog. -this is a numerous collection of various articles
        </h2>
        <button
          type="submit"
          className="mt-8 text-2xl pb-[2px] border-white border-b-2 font-light flex items-center max-sm:mt-4	max-md:mt-4"
        >
          Go to articles
          <IoIosArrowForward />
        </button>
      </div>
      <div className="text-white w-[400px] max-sm:mt-8 max-sm:w-[350px] max-md:mt-8 max-lg:mt-8 ">
        <h3 className="">
          Electronic scientific library of open access. The catalog is regularly
          overgrowth with texts of articles from varous scientific publications.
          Grouped by journals and heading.
        </h3>
        <div className="flex mt-8">
          <button
            type="submit"
            className="border-white border rounded mx-2 p-2 flex max-sm:ml-0 max-md:ml-0"
          >
            <BiLogoPlayStore size="24" className="px-1" />
            Google play
          </button>
          <button
            type="submit"
            className="border-white rounded border mx-2 p-2 flex"
          >
            <IoLogoApple size="24" className="px-1" />
            App store
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroDescription
