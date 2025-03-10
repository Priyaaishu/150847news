import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from './NewsCard';

function Hero({ trendingNews }) {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Trending News</h1>
      <Row>
        {trendingNews.map((article) => (
          <Col md={4} key={article.url} className="mb-4">
            <NewsCard article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hero;