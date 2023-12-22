import React from "react";
import NavBar from "./nav-component";
import NewsList from "./search-topic/news-list.component";
import { Routes, Route } from "react-router-dom";
import CountryNewsList from "./country-news/country-news.component";
import CryptoNewsList from "./crypto-news/crypto-news.component";
import WorldNewsList from "./world-news/world-news.component";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/list" element={<NewsList />} />
        <Route path="/country" element={<CountryNewsList />} />
        <Route path="/crypto" element={<CryptoNewsList />} />
        <Route path="/world" element={<WorldNewsList />} />
      </Routes>
    </div>
  );
};

export default Home;
