import { useLocation } from "react-router-dom";
import HeadLine from '../../components/hero/headLine/HeadLine'
import MovieLogo from '../../assets/movie.png'
import "./MovieDettails.css"


function MovieDettails() {
    const location = useLocation();
    const movie = location.state?.movie; // Recupera i dati del film

    if (!movie) {
        return <h2>Nessun film trovato</h2>;
    }

    return (
        <div className="movie-container">
            <div style={{paddingRight: '100px'}}>
                <HeadLine text={movie.titolo} fontWeight={800} fontSize={"3em"} color={"#2D3648"}/>
                <h4 style={{color: '#EA4D81'}}><strong>Anno: </strong>{movie.annoUscita}</h4>
                <p><strong>Genere: </strong>{movie.genere}</p>
                <p> {movie.descrizione}</p>
            </div>
        <div>
            <img src={movie.imageURL} className="movie-img" alt={movie.titolo} />
        </div>
        </div>
    );
}

export default MovieDettails;
