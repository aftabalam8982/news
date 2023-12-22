import React from "react";

const nav = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Technology",
];

const NavBar = () => {
  return (
    <div>
      {nav.map((navItem) => {
        return (
          <button class="bg-slate-500 hover:bg-slate-700 text-white font-small py-2 px-3 rounded-xl mx-5 mt-2">
            {navItem}
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;
