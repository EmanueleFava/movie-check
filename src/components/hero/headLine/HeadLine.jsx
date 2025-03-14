function HeadLine({text, fontSize, fontWeight, textAlign ,color, marginTop}){


    return (

        <h1 style =
            {{fontSize: fontSize, 
                textAlign: textAlign ,
                fontWeight: fontWeight ,
                color: color,
                marginTop: marginTop
            }}> 
                
            {text} 
            
        </h1>

    )

}



export default HeadLine;