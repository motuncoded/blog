import Navbar from "./Navbar";
import PropTypes from "prop-types";


BlogLayout.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
};
function BlogLayout({children, title}) {
  return (
    <div
      className=" bg-bgColor min-h-screen grid bg-red w-[100%] 
    scrollbar scrollbar-thin scrollbar-track-red 
    scrollbar-bgColor"
    >
      <div className="container bg-bgColor">
        <Navbar />
        <h1 className="text-3xl text-ghostWhite text-center mb-8">{title}</h1>
       
        {children}
      </div>
    </div>
  );
}

export default BlogLayout
