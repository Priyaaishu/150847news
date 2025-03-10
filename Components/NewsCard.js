import { Card } from 'react-bootstrap';

function NewsCard({ article }) {
  return (
    <Card>
      <Card.Img variant="top" src={article.urlToImage || 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description || 'No description available'}</Card.Text>
        <Card.Link href={article.url} target="_blank">Read More</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;