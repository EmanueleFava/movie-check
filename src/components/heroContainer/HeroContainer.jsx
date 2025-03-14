import HeroText from "../hero/HeroText/HeroText";
import "./Container.css"
import HeroPoster from "../hero/heroPoster/HeroPoster";

function HeroContainer(){

    return (
        <div className="hero-container">
            <HeroText/>
            <HeroPoster/>
        </div>
    )



}




export default HeroContainer;