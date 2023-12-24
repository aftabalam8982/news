import React, { useEffect, useState } from "react";
// import { countries } from "../../news";
import NewsCard from "../news-card.component";
// import { getCountryNews } from "../../api/news-api";

const CountryNewsList = () => {
  const [countries, setCountries] = useState();
  // useEffect(() => {
  //   const countriesNews = async () => {
  //     const response = await getCountryNews();
  //     setCountries(response);
  //   };
  //   countriesNews();
  // }, [countries]);
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
