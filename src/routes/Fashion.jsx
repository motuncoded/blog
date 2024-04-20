import { useEffect, useState } from "react";
import BlogLayout from "../components/BlogLayout";
import BlogCard from "../components/BlogCard";
import fashion from "../components/json/fashion.json";
import Skeleton from "../components/Skeleton";


function Fashion() {
 
     const [loading, setLoading] = useState(false);

     useEffect(() => {
       setTimeout(() => {
         setLoading(true);
       }, 1000);
     }, []);
  return (
    <div className="bg-bgColor">
      <BlogLayout title="Fashion">
        <div className="container grid grid-cols-3 place-items-center gap-4 bg-bgColor max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
          {fashion.map((news, index) => {
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

export default Fashion;
