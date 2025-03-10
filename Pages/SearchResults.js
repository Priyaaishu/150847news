import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsContext from '../Context/NewsContext';
import NewsCard from '../Components/NewsCard';

function SearchResults() {
  const { searchResults, loading } = useContext(NewsContext);

  return (
    <main>
      <Container className="my-4">
        <h1 className="text-center mb-4">Search Results</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : searchResults.length > 0 ? (
          <Row>
            {searchResults.map((article) => (
              <Col md={4} key={article.url} className="mb-4">
                <NewsCard article={article} />
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center">No results found.</p>
        )}
      </Container>
    </main>
  );
}

export default SearchResults;