import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, onDelete }) => {
  const navigate = useNavigate();
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleDelete = () => {
    onDelete(movie.id);
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={movie.image} 
        alt={movie.title}
        style={{ height: '500px', objectFit: 'cover' }}
      />

      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title>{movie.title}</Card.Title>
          <Badge bg="warning" text="dark" pill>
            {movie.rating}/10
          </Badge>
        </div>
        
        <Card.Text>{movie.details}</Card.Text>
        
        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary" onClick={handleDetails}>
            View Details
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Remove
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        Released: {formatDate(movie.date)}
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
