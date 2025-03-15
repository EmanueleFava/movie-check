import { useLocation } from "react-router-dom";
import HeadLine from '../../components/hero/headLine/HeadLine'
import MovieCheck from "../../assets/movie-check.png"
import "./DirectorDetails.css"
import getFilmRegista from "../../graphql/Queries";
import { useQuery } from "@apollo/client";
import Card from "../../components/card/Card";

function DirectorDetails() {
    const location = useLocation();
    const director = location.state?.director; 

    const GET_FILM = getFilmRegista(director.id);
    const { data, loading, error } = useQuery(GET_FILM);

    if (!director) {
        return <h2>Nessun reegistra trovato</h2>;
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;


    return (
        <>
            <div className="director-container">
                <div style={{paddingRight: '100px'}}>
                    <HeadLine text={director.nome + " " + director.cognome} fontWeight={800} fontSize={"3em"} color={"#2D3648"}/>
                    <h4 style={{color: '#EA4D81'}}><strong>Anno: </strong>{director.dataNascita}</h4>
                    <p><strong>Nazionalità: </strong>{director.nazionalita}</p>
                    <p> {director.biografia}</p>
                </div>
            <div>
                <img src={director.imageURL} className="director-img" alt={director.cognome} />
            </div>               
            </div>

            <img src={MovieCheck} className="director-list-logo" alt="logo"/>
            <div className="director-list">
                {data?.regista.getFilm.length > 0 ? (
                    data.regista.getFilm.map((movie) => <Card type={"movie"} data={movie} />)
                ) : (
                    <p className="no-movies">Nessun film trovato per questo regista.</p>
                )}
            </div>
        </>
    );
}

export default DirectorDetails;
