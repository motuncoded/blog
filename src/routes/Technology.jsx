import { useEffect, useState } from "react";
// Import BlogLayout component
import BlogLayout from "../components/BlogLayout";
// Import BlogCard component
import BlogCard from "../components/BlogCard";
// Import general.json file
// Import Skeleton component
import Skeleton from "../components/Skeleton";

function Technology() {
  // Define state variable articles and its setter function setArticles
  const [articles, setArticles] = useState([]);
  // Define state variable loading and its setter function setLoading
  const [loading, setLoading] = useState(false);

  // Use useEffect hook to set loading and response to true after 1 second

  useEffect(() => {
    let url = `https://dev.to/api/articles`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data));
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-bgColor ">
      <BlogLayout title="Technology">
        <div
          className="container grid grid-cols-3 place-items-center gap-4 bg-bgColor
         max-sm:grid-cols-1 max-sm:place-items-center max-md:grid-cols-2 max-lg:grid-cols-2"
        >
          {articles.map((news, index) => {
            return (
              <>
                {!loading ? (
                  <Skeleton />
                ) : (
                  <BlogCard
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.cover_image}
                    url={news.url}
                    tags={news.tag_list}
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

export default Technology;
