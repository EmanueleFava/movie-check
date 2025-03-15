import { useQuery } from "@apollo/client";
import { useState } from 'react';
import { GET_MOVIES, getFilmPerGenere } from '../../../graphql/Queries';
import Filter from "../../../components/filter/Filter";
import Card from "../../../components/card/Card";
import MovieCheck from "../../../assets/movie-check.png";

function MovieList() {
    const [genere, setGenere] = useState("");
    const { data: allMoviesData, loading: allMoviesLoading, error: allMoviesError } = useQuery(GET_MOVIES);
    const { data: filteredMoviesData, loading: filteredMoviesLoading, error: filteredMoviesError } = useQuery(getFilmPerGenere(genere), {
        skip: !genere, 
    });

    const handleFilter = (e) => {
        const selectedGenere = e.target.value;
        setGenere(selectedGenere);
    };

    if (allMoviesLoading || (genere && filteredMoviesLoading)) return <p>Loading...</p>;
    if (allMoviesError || filteredMoviesError) return <pre>{allMoviesError?.message || filteredMoviesError?.message}</pre>;

    const movies = genere ? filteredMoviesData?.getFilmPerGenere : allMoviesData?.getAllFilm;

    return (
        <>
            <img src={MovieCheck} className="movie-list-logo" alt="logo" />
            <Filter handler={handleFilter} genere={genere} />
            <div className="movie-list">
                {movies && movies.length > 0 ? (
                    movies.map((movie) => <Card key={movie.id} type={"movie"} data={movie} />)
                ) : (
                    <h4 style={{ color: "#ee4e83" }}>
                        <strong>Nessun Film {genere} trovato</strong>
                    </h4>
                )}
            </div>
        </>
    );
}

export default MovieList;