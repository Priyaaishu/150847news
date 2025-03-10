import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const API_KEY = '511df425ad8d4985a270e5f530f6f414'; // Replace with your NewsAPI key

export const NewsProvider = ({ children }) => {
  const [topNews, setTopNews] = useState([]);
  const [categories] = useState(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch trending news
  const fetchTopNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
      setTopNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching top news:', error);
      setTopNews([]);
    }
    setLoading(false);
  };

  // Fetch news by category
  const fetchNewsByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
      );
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching category news:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Fetch news by search query
  const fetchNewsBySearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      setSearchResults(response.data.articles);
    } catch (error) {
      console.error('Error fetching search news:', error);
      setSearchResults([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTopNews();
  }, []);

  return (
    <NewsContext.Provider value={{ topNews, categories, searchResults, loading, fetchNewsByCategory, fetchNewsBySearch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;