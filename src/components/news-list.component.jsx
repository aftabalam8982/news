import React from "react";
import NewsCard from "./news-card.component";
import { news } from "../news";

const NewsList = () => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-evenly">
      {news &&
        news.map((newsItem) => {
          return (
            <div className="" key={newsItem.Title}>
              <NewsCard newsItem={newsItem} />
            </div>
          );
        })}
    </div>
  );
};

export default NewsList;
