import { Last } from "react-bootstrap/esm/PageItem";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import MovieHeadline from "./movieHeadline/MovieHeadline";
import MovieList from "./movieList/MovieList";
import "./Movies.css";

function Movies(){


    const movies = [
        {
            "id": 1,
            "titolo": "Avatar: La via dell'acqua",
            "imageURL": "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "annoUscita": 2022,
            "durata": 192,
            "genere": "Drammatico",
            "descrizione": `Avatar - La via dell'acqua (Avatar: The Way of Water) è un film del 2022 co-scritto, diretto, co-prodotto e co-montato da James Cameron. Il film è il sequel di Avatar (2009), ed è stato candidato a numerosi premi cinematografici.`
        },
        {
            "id": 2,
            "titolo": "Inception",
            "imageURL": "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
            "annoUscita": 2010,
            "durata": 148,
            "genere": "Sci-Fi",
            "descrizione": `Inception è un film di fantascienza del 2010, scritto e diretto da Christopher Nolan. Racconta la storia di un ladro che ruba segreti mediante l'infiltrazione nei sogni delle persone.`
        },
        {
            "id": 3,
            "titolo": "The Dark Knight",
            "imageURL": "https://m.media-amazon.com/images/I/81dwqKFOfwL._UF1000,1000_QL80_.jpg",
            "annoUscita": 2008,
            "durata": 152,
            "genere": "Azione",
            "descrizione": `The Dark Knight è un film del 2008, diretto da Christopher Nolan. È il secondo capitolo della trilogia di Batman e vede Christian Bale nel ruolo di Bruce Wayne, mentre Heath Ledger interpreta il Joker.`
        }
    ]
    

    return (
    
        <>
            <div className="movies-container">
                <MovieHeadline/>
                <CarouselComponent movies={movies}/> 
            </div>
            <MovieList/>


        </>
    )



}



export default Movies;