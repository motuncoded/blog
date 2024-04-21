// Import PropTypes library
import PropTypes from "prop-types";

// Import image from assets folder
import image from "../assets/image.jpg";
import { Link } from "react-router-dom";

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
    <div
      className="bg-black p-2 max-w-[350px] w-max rounded max-sm:w-[300px] "
      role="region"
    >
      <img
        src={src ? src : image}
        className="object-cover h-60 w-[100%]"
        alt={title ? title : "An image related to the news"}
        aria-label={title ? title : "An image related to the news"}
      />
      <div>
        <h6 className="text-white pt-2 text-[1rem] font-bold ">
          {title.slice(0, 52)}
        </h6>
        <p className="text-white text-[1rem] mt-2">
          {description ? description.slice(0, 100) : "The news is important"}...
          <Link
            className="text-ghostWhite"
            to={url}
            aria-label={`Read more about ${title}`}
          >
            See more
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
