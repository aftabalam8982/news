import React from "react";
import { countries } from "../../news";
import NewsCard from "../news-card.component";

const CountryNewsList = () => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-evenly">
      {countries &&
        countries.map((newsItem) => {
          return (
            <div key={newsItem.Title}>
              <NewsCard newsItem={newsItem} />
            </div>
          );
        })}
    </div>
  );
};

export default CountryNewsList;
