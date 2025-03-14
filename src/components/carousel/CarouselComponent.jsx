import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CarouselComponent.css';

function CarouselComponent({ movies }) {
  return (
    <Carousel interval={5000}>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
			<Link to={`/movieDetails`} state={{ movie: movie }} >
				<div className="carousel-image-container">
					<img
					className="d-block w-100"
					src={movie.imageURL}
					alt={movie.titolo}
					/>
					<div className="carousel-caption">
					<h5>{movie.titolo}</h5>
					<p>{movie.annoUscita}</p>
					<p>{movie.genere}</p>
				</div>
			</div>
		  </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;