import { Form, Button } from 'react-bootstrap';

function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed! (This is a placeholder)');
  };

  return (
    <div className="text-center">
      <h5>Subscribe to Our Newsletter</h5>
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="me-2"
          style={{ maxWidth: '300px' }} // Optional: Limit width for better layout
        />
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </div>
  );
}

export default Newsletter;