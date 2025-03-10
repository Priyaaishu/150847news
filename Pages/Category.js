import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NewsContext from '../Context/NewsContext';
import NewsCard from '../Components/NewsCard';

function Category() {
  const { cat } = useParams();
  const { fetchNewsByCategory, loading } = useContext(NewsContext);
  const [categoryNews, setCategoryNews] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadCategoryNews = async () => {
      const news = await fetchNewsByCategory(cat);
      setCategoryNews(news);
      setIsInitialLoad(false); // Mark initial load as complete after first fetch
    };
    loadCategoryNews();
  }, [cat, fetchNewsByCategory]);

  return (
    <main>
      <Container className="my-4">
        <h1 className="text-center mb-4">{cat.charAt(0).toUpperCase() + cat.slice(1)} News</h1>
        {loading && isInitialLoad ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Row>
            {categoryNews.map((article) => (
              <Col md={4} key={article.url} className="mb-4">
                <NewsCard article={article} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  );
}

export default Category;