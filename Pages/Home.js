import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import NewsContext from '../Context/NewsContext';
import Hero from '../Components/Hero';

function Home() {
  const { topNews, loading } = useContext(NewsContext);

  return (
    <main>
      <Container>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Hero trendingNews={topNews} />
        )}
      </Container>
    </main>
  );
}

export default Home;