import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "5650a18759mshc74eea8dffa40cep187e47jsndf138e367db9",
  "X-RapidAPI-Host": "news67.p.rapidapi.com",
};

export const searchTopic = async (text) => {
  const url = "https://news67.p.rapidapi.com/v2/topic-search";
  try {
    const response = await axios.get(url, {
      params: {
        languages: "en",
        search: `${text}`,
      },
      headers,
    });
    return response.data.news;
  } catch (err) {
    console.log(err.message);
  }
};

export const getCountryNews = async () => {
  const url = "https://news67.p.rapidapi.com/v2/country-news";
  try {
    const response = await axios.get(url, {
      params: {
        fromCountry: "in",
        languages: "en",
        onlyInternational: "true",
      },
      headers,
    });
    return response.data.news;
  } catch (err) {
    console.log(err.message);
  }
};
