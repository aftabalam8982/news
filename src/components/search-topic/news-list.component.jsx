import React from "react";
import NewsCard from "../news-card.component";
// import { news } from "../../news";

const SearchNewsList = ({ newsData }) => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-evenly">
      {newsData &&
        newsData.map((newsItem) => {
          return (
            <div key={newsItem.Title}>
              <NewsCard newsItem={newsItem} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchNewsList;
