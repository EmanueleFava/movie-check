import HeadLine from "../hero/headLine/HeadLine";
import "./Banner.css"
function Banner({director}){

    return (
        <div className="banner-container">
             <div style={{paddingRight: '100px'}}>
                <HeadLine text={director.nome + director.cognome} fontWeight={800} fontSize={"3em"} color={"#2D3648"}/>
                <h4 style={{color: '#EA4D81'}}><strong>Anno: </strong>{director.dataNascita}</h4>
                <p><strong>Nazionalità: </strong>{director.nazionalita}</p>
                <p> {director.biografia}</p>
            </div>
            <div>
                <img src={director.imageURL} className="director-img" alt={director.cognome} />
            </div>
        </div>
    )

}



export default Banner;