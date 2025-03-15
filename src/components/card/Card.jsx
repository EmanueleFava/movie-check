import { Link } from "react-router-dom";
import "./Card.css";

function Card({ type, data }) {

    const isMovie = type === "movie";


    return (
        <Link to={ isMovie? `/movieDetails` : '/directorDetails' } 
         state={isMovie ? { movie: data } : { director: data }}  
         className="card-link">

            <div className="card-container">
                <img src={data.imageURL} alt={ isMovie? data.titolo : data.nome }></img>
                <h6>{isMovie? data.genere : data.nazionalita}</h6>
                <h4>{isMovie? data.annoUscita : data.dataNascita}</h4>
                <h6 style={{color:'#262B36', marginBottom: '20px'}}><strong>{isMovie? data.titolo : data.nome + " " + data.cognome}</strong></h6>
            </div>

        </Link>
    );
}

export default Card;
