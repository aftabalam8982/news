import React from "react";
import NewsCard from "../news-card.component";
import { world } from "../../news";

const WorldNewsList = () => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-evenly">
      {world &&
        world.map((newsItem) => {
          return (
            <div key={newsItem.Title}>
              <NewsCard newsItem={newsItem} />
            </div>
          );
        })}
    </div>
  );
};

export default WorldNewsList;
