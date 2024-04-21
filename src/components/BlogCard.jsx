// Import PropTypes library
import PropTypes from "prop-types";

// Import image from assets folder
import image from "../assets/image.jpg";

// Define PropTypes for BlogCard component
BlogCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string,
  tags: PropTypes.string,
};

// Define BlogCard component
function BlogCard({ title, description, src, url }) {
  return (
    <div className="bg-black p-2 max-w-[345px]  rounded">
      <img
        src={src ? src : image}
        className="object-cover h-60 w-[100%]"
        alt=""
      />
      <div className="">
        <h6 className="text-white pt-2 text-[1rem] font-bold ">
          {title.slice(0, 52)}
        </h6>
        <p className="text-white text-[1rem] mt-2">
          {description ? description.slice(0, 100) : "The news is important"}...
          <a className="text-ghostWhite" href={url}>
            Read more
          </a>
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
