import MoviePoster from "../../../assets/MoviePosters.png"
import "./HeroPoster.css"

function HeroPoster(){

    return (

        <div className="hero-img">
            <img src={MoviePoster} alt="hero-image"></img>
        </div>

    )
    

}



export default HeroPoster;