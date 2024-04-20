import { useEffect, useState } from "react";
import BlogLayout from "../components/BlogLayout"
import BlogCard from "../components/BlogCard";
import Skeleton from "../components/Skeleton";

function Technology() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    let url = `https://dev.to/api/articles`;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        setArticles(data));
    setTimeout(() => {
          setLoading(true)

    }, 1000)
  
  
  }, [])
  
  return (
    <div className = "bg-bgColor" >
    <BlogLayout title="Technology">
          <div className="container grid grid-cols-3 place-items-center gap-4 bg-bgColor max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
          {articles.map((news, index) => {
            return (
              <>
                {!loading ? <Skeleton /> :

                  <BlogCard
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.cover_image}
                    url={news.url}
                    tags={news.tag_list}
                  />
                }
              </>
            )
          }
        )
            
            
          }
          </div>
    </BlogLayout>
      </div>
    )
}

export default Technology;
