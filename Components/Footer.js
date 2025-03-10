import { Container } from 'react-bootstrap';
import Newsletter from './Newsletter';

function Footer() {
  return (
    <footer>
      <Container>
        <Newsletter />
        <p className="mt-3">&copy; 2025 InsightStream. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;