import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MoviesList = ({ movies, onDelete }) => {
  return (
    <Container>
      <h2 className="text-center mb-4">Popular Movies</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} onDelete={onDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesList;
