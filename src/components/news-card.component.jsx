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

        <div className="flex items-center">
          {/* <img
            className="w-8 h-8 rounded-full mr-2"
            src="author-avatar.jpg"
            alt="Author Avatar"
          /> */}
          <a href={Url} className="text-sm text-gray-700">
            {Source}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
