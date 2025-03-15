import { Last } from "react-bootstrap/esm/PageItem";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import MovieHeadline from "./movieHeadline/MovieHeadline";
import MovieList from "./movieList/MovieList";
import "./Movies.css";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from '../../graphql/Queries'

function Movies(){


  const { data, loading, error } = useQuery(GET_MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;

    const lastReleases = data?.getAllFilm.filter((movie) => movie.annoUscita >= 2018) || [];
    const lastFour = lastReleases.slice(0, 4); // Ottieni i primi 4 film

   

    return (
    
        <>
            <div className="movies-container">
                <MovieHeadline/>
                <CarouselComponent movies={lastFour}/> 
            </div>
            <MovieList/>


        </>
    )



}



export default Movies;