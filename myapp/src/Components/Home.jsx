// Components/Home.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-5">
      <h1>Welcome to Our Website</h1>
      <p>
        We are glad to have you here. Our website offers a range of services and resources designed to help you achieve your goals. Whether you are looking for the latest news, expert advice, or a place to connect with others, we have something for everyone.
      </p>
      <p>
        Explore our site to find out more about what we offer and how we can assist you. We are committed to providing you with the best experience possible.
      </p>
      <Button as={Link} to="/contact" variant="primary">Contact Us</Button>
    </Container>
  );
}

export default Home;
