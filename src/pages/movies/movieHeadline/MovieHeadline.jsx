import HeadLine from '../../../components/hero/headLine/HeadLine'


function MovieHeadline() {

    return (
        <>
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
        </>
    )


}



export default MovieHeadline;