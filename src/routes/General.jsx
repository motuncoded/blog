import { useEffect, useState } from "react";
// Import BlogLayout component
import BlogLayout from "../components/BlogLayout";
// Import BlogCard component
import BlogCard from "../components/BlogCard";
// Import general.json file
import general from "../components/json/general.json";
// Import Skeleton component
import Skeleton from "../components/Skeleton";

function General() {
  // Define state variable loading and its setter function setLoading
  const [loading, setLoading] = useState(false);

  // Use useEffect hook to set loading to true after 1 second
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  // Return JSX);

  return (
    <div className="bg-bgColor">
      <BlogLayout title="General">
        <div className="container grid grid-cols-3 place-items-center gap-4 bg-bgColor max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
          {general.map((news, index) => {
            return (
              <>
                {!loading ? (
                  <Skeleton />
                ) : (
                  <BlogCard
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                  />
                )}
              </>
            );
          })}
        </div>
      </BlogLayout>
    </div>
  );
}

export default General;
