import MovieCheck from "../../../assets/movie-check.png"
import { useQuery } from "@apollo/client";
import Card from "../../../components/card/Card";
import { GET_MOVIES } from '../../../graphql/Queries'
import Filter from "../../../components/filter/Filter";
import { useState, useEffect } from 'react';

function MovieList() {

    const [ genere, setGenere ] = useState("");
    const { data, loading, error } = useQuery(GET_MOVIES);
    const [ filteredMovies, setFilteredMovies ] = useState([]);

    useEffect(() => {
        if (data) {
            const allMovies = data.getAllFilm;
            if (genere === "") {
                setFilteredMovies(allMovies);
            } else {
                const moviesByGenere = allMovies.filter((movie) => movie.genere.includes(genere));
                setFilteredMovies(moviesByGenere);
            }
        }
    }, [data,genere])

    
    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;


    function handleFilter(e) {
        const selectedGenere = e.target.value;  
        setGenere(selectedGenere); 
        console.log(selectedGenere);  
    }
    

    return (
        <>
            <img src={MovieCheck} className="movie-list-logo" alt="logo"/>
            <Filter handler={handleFilter} genere={genere}/>
            <div className="movie-list">
                {filteredMovies.map((movie) => <Card key={movie.id}  type={"movie"} data={movie}/>)}
            </div>
        
        
        </>
    )

}




export default MovieList;