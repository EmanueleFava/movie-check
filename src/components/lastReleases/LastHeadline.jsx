import HeadLine from "../hero/headLine/HeadLine";
import MovieCheckLogo from "../../assets/herocheckshadow.png"

function LastHeadline(){

    return (
        
        <>
            <img src={MovieCheckLogo} alt="movie-check" style = 
                {{position: 'absolute',
                width: '40svh',
                marginTop: -160,
                marginLeft: 30
                }}/>
            <div style = 
            {{position: 'absolute', 
            marginLeft: '42%' ,
            marginTop: -70}}>
                <HeadLine 
                text={"Ultime"}
                fontSize={"4rem"}
                fontWeight={700}
                color={"#2D3648"}
                />
                <HeadLine 
                text={"Uscite"}
                fontSize={"4rem"}
                fontWeight={700}
                color={"#EA4D81"}
                marginTop={-20}
                />
            </div>
        
        
        </>


    )



}


export default LastHeadline;