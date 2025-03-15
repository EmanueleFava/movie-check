import "./LastReleases.css";
import LastHeadline from "./LastHeadline";
import Card from "../card/Card";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
    query GetAllFilm {
        getAllFilm {
            id
            titolo
            imageURL
            annoUscita
            durata
            genere
            descrizione
        }
    }
`;

function LastReleases() {
    const { data, loading, error } = useQuery(GET_MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;

    const lastReleases = data?.getAllFilm.filter((movie) => movie.annoUscita >= 2000) || [];
    const lastFour = lastReleases.slice(0, 4); // Ottieni i primi 4 film
    
    return (
        <div className="last-releases">
            <LastHeadline />
            <div className="card-group">
                {lastReleases.length > 0 ? (
                    lastFour.map((movie) => <Card key={movie.id} type="movie" data={movie} />)
                ) : (
                    <p>Nessun film disponibile.</p>
                )}
            </div>
        </div>
    );
}

export default LastReleases;
