import React, { useState } from "react";
import SearchBar from "./searchBar.component";
import SearchNewsList from "./news-list.component";
import { searchTopic } from "../../api/news-api";

const SearchTopic = () => {
  const [text, setText] = useState("");
  const [newsData, setNewsData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(text);
    const response = await searchTopic(text);
    setNewsData(response);
  };

  return (
    <div>
      <SearchBar setText={setText} handleSubmit={handleSubmit} />
      <SearchNewsList newsData={newsData} />
    </div>
  );
};

export default SearchTopic;
