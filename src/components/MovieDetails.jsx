import React from 'react';
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Container className="py-5">
      <Button variant="secondary" className="mb-4" onClick={() => navigate('/')}>
        Back to Movies
      </Button>
      <Row>
        <Col md={4}>
          <Image src={movie.image} alt={movie.title} fluid />
        </Col>
        <Col md={8}>
          <h1>{movie.title}</h1>
          <Badge bg="warning" text="dark" className="mb-3">
            Rating: {movie.rating}/10
          </Badge>
          <p className="lead">{movie.details}</p>
          <p>
            <strong>Release Date:</strong> {formatDate(movie.date)}
          </p>
          {/* Add more movie details here */}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;