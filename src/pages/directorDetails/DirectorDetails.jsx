import { useLocation } from "react-router-dom";
import HeadLine from '../../components/hero/headLine/HeadLine'
import MovieCheck from "../../assets/movie-check.png"
import "./DirectorDetails.css"


function DirectorDetails() {
    const location = useLocation();
    const director = location.state?.director; 

    if (!director) {
        return <h2>Nessun reegistra trovato</h2>;
    }

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
            </div>
        </>
    );
}

export default DirectorDetails;
