import { useEffect, useState } from "react";
import BlogLayout from "../components/BlogLayout";
import BlogCard from "../components/BlogCard";

function Technology() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=fashion&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
          .then((data) => setArticles(data.articles));
     
  }, []);

  return (
    <div className="bg-bgColor">
      <BlogLayout title="Fashion">
        <div className="container grid grid-cols-3 place-items-center gap-4 bg-bgColor max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
          {articles && articles.map && articles.map((news, index) => {
            return (
              <BlogCard
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
        </div>
      </BlogLayout>
    </div>
  );
}

export default Technology;
