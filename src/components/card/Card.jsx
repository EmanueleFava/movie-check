import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
    return (
        <Link to={`/movieDetails`} state={{ movie: data }} className="card-link">
            <div className="card-container">
                <img src={data.imageURL} alt={data.titolo}></img>
                <h6>{data.genere}</h6>
                <h4>{data.annoUscita}</h4>
                <h6 style={{color:'#262B36', marginBottom: '20px'}}><strong>{data.titolo}</strong></h6>
            </div>
        </Link>
    );
}

export default Card;
