import { useContext, useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NewsContext from '../Context/NewsContext';

function Navbar() {
  const { categories, fetchNewsBySearch } = useContext(NewsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchNewsBySearch(searchQuery);
      navigate('/search');
      setSearchQuery('');
    }
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-4">
      <BootstrapNavbar.Brand href="/">InsightStream</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {categories.map((cat) => (
            <Nav.Link key={cat} href={`/category/${cat}`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Nav.Link>
          ))}
        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Search news..."
            className="me-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;