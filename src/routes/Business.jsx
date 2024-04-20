
import { useEffect, useState } from "react";
import BlogLayout from "../components/BlogLayout"
import BlogCard from "../components/BlogCard";


function Business() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
        const API_KEY = "9e86051ea3494bb5b4443b14817a7ec3";
    let url = `https://newsapi.org/v2/everything?q=coding&apiKey=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="bg-bgColor">
      <BlogLayout title="Business">
        <div className="container grid grid-cols-3 place-items-center gap-4 bg-bgColor max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2">
          {articles.map((news, index) => {
            return (
              <BlogCard
                key={index}
                title={news.title}
                description={news.description}
                
                url={news.url}
              />
            );
          })}
        </div>
      </BlogLayout>
    </div>
  );
}

export default Business
