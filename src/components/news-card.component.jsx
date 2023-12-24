import React from "react";

const NewsCard = (newsItem) => {
  const { title, Url, Image, Description, Source } = newsItem.newsItem;
  // console.log(title, Url, Image, Description, Source);
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={Image}
        alt={title}
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{Description}</p>

        <div className="flex items-center justify-between">
          <a
            href={Url}
            className="border-2 border-cyan-600 hover:bg-slate-200 text-cyan-700 font-small py-1 px-2 rounded-xl mx-5 mt-2"
          >
            read more...
          </a>
          <p className="text-sm text-gray-700">{Source}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
