import React from "react";
import NavBar from "./nav-component";
import NewsList from "./search-topic/news-list.component";
import { Routes, Route } from "react-router-dom";
import CountryNewsList from "./country-news/country-news.component";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/list" element={<NewsList />} />
        <Route path="/country" element={<CountryNewsList />} />
      </Routes>
    </div>
  );
};

export default Home;
