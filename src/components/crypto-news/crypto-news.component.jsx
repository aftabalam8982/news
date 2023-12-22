import React from "react";
import NewsCard from "../news-card.component";
import { cryptoes } from "../../news";

const CryptoNewsList = () => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-evenly">
      {cryptoes &&
        cryptoes.map((newsItem) => {
          return (
            <div key={newsItem.Title}>
              <NewsCard newsItem={newsItem} />
            </div>
          );
        })}
    </div>
  );
};

export default CryptoNewsList;
