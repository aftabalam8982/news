import React from "react";
import NavBar from "./nav-component";
import { Routes, Route } from "react-router-dom";
import CountryNewsList from "./country-news/country-news.component";
import CryptoNewsList from "./crypto-news/crypto-news.component";
import WorldNewsList from "./world-news/world-news.component";
import SearchTopic from "./search-topic/search-topic.component";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/list" element={<SearchTopic />} />
        <Route path="/country" element={<CountryNewsList />} />
        <Route path="/crypto" element={<CryptoNewsList />} />
        <Route path="/world" element={<WorldNewsList />} />
      </Routes>
    </div>
  );
};

export default Home;
