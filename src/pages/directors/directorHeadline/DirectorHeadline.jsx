import HeadLine from '../../../components/hero/headLine/HeadLine'


function DirectorHeadline() {

    return (
        <>
            <HeadLine 
            text={"Random"}
            fontSize={"4rem"}
            fontWeight={700}
            color={"#2D3648"}
            />
            <HeadLine 
            text={"Director"}
            fontSize={"4rem"}
            fontWeight={700}
            color={"#EA4D81"}
            marginTop={-20}
            />
        </>
    )


}



export default DirectorHeadline;