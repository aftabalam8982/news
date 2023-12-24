import React from "react";
import { Link } from "react-router-dom";

// const nav = [
//   "General",
//   "Business",
//   "Entertainment",
//   "Health",
//   "Science",
//   "Technology",
// ];

const NavBar = () => {
  return (
    <div className=" text-center py-8">
      <Link to="/list">
        <button className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-cyan-600 text-white font-small py-2 px-3 rounded-xl mx-5 mt-2">
          Search Topic
        </button>
      </Link>
      <Link to="/country">
        <button className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-cyan-600 text-white font-small py-2 px-3 rounded-xl mx-5 mt-2">
          Country
        </button>
      </Link>
      <Link to="/crypto">
        <button className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-cyan-600 text-white font-small py-2 px-3 rounded-xl mx-5 mt-2">
          Crypto
        </button>
      </Link>
      <Link to="/world">
        <button className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-cyan-600 text-white font-small py-2 px-3 rounded-xl mx-5 mt-2">
          World
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
