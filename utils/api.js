import axios from 'axios';

const API_KEY = '511df425ad8d4985a270e5f530f6f414'; // Replace with your NewsAPI key

export const fetchTopNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};