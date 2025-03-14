import HeadLine from "../headLine/HeadLine";
import MovieLogoText from "../../../assets/MovieCheck.png"; 
import HeroParagraph from "../heroParagraph/HeroParagraph";
import "./HeroText.css"

function HeroText(){

    return (
        
        <div className="hero-text">
            <img src={MovieLogoText} alt="logo-text"></img>

            <HeadLine text={'Il tuo portale'} 
            color={"#2D3648"} 
            textAlign={"left"} 
            fontSize ={"2.5rem"} 
            fontWeight={600}/>

            <HeadLine text={'Cinematografico'}
            color={"#2D3648"} 
            textAlign={"left"} 
            fontSize ={"2.5rem"} 
            fontWeight={600}/>

            <HeadLine text={'Definitivo!'} 
            color={"#EA4D81"} 
            textAlign={"left"} 
            fontSize ={"2.8rem"} 
            fontWeight={800}/>

            <h4 style = 
                {{fontWeight: 600, 
                textAlign: 'left', 
                color: '#2D3648'}}>
                
                Scopri, Esplora, Guarda.
                    
            </h4>

            <HeroParagraph/>


        </div>



    )


}




export default HeroText;