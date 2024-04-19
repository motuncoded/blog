
import PropTypes from "prop-types";
import image from "../assets/fashion.jpg"
BlogCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string,
};
function BlogCard({ title, description, src, url }) {
  return (
    <div className="bg-[#191f22] p-2 max-w-[345px] rounded">
      <img src={src?src:image} alt="" />
      <div className="">
        <h6 className="text-white pt-2 text-[1.5rem]">{title.slice(0, 52)}</h6>
        <p className="text-white text-[1rem] mt-2">
          {description ? description.slice(0, 90) : "The news is important"}...
        </p>
      </div>
          <div className="flex mt-6">
        <a
          className="text-black border border-ghostWhite border-b-2 bg-ghostWhite p-2 "
          href={url}
        >
          More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
