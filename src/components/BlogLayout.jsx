// Import MenuBar component
import MenuBar from "./MenuBar";

// Import Navbar component
import Navbar from "./Navbar";

// Import PropTypes library
import PropTypes from "prop-types";

// Define PropTypes for BlogLayout component
BlogLayout.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BlogLayout.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
};

// Define BlogLayout component
function BlogLayout({ children, title }) {
  return (
    <div
      className=" bg-bgColor min-h-screen grid bg-red container w-max 
    scrollbar scrollbar-thin scrollbar-track-red 
    scrollbar-bgColor"
      aria-label="Blog layout"
    >
      <div className="container bg-bgColor">
        <Navbar aria-label="Navigation bar" />
        <h1
          className="text-3xl text-ghostWhite text-center mt-4 mb-4"
          aria-label={`Blog title: ${title}`}
        >
          {title}
        </h1>
        <MenuBar aria-label="Menu bar" />
        {children}
      </div>
    </div>
  );
}

export default BlogLayout;
