import MovieCheck from "../../../assets/movie-check.png"
import { useQuery } from "@apollo/client";
import Card from "../../../components/card/Card";
import { GET_DIRECTORS } from "../../../graphql/Queries";


function DirectorList() {

    const { data, loading, error } = useQuery(GET_DIRECTORS);
    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;

    return (

        <>
            <img src={MovieCheck} className="director-list-logo" alt="logo"/>
            <div className="director-list">
                {data?.getAllRegisti.map((director)=><Card type={"director"} data={director}></Card>)}
            </div>
        </>


    )



}




export default DirectorList;