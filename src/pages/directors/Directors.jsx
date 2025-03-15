import { useQuery } from "@apollo/client";
import DirectorHeadline from "./directorHeadline/DirectorHeadline";
import DirectorList from './directorList/DirectorList'
import Banner from "../../components/banner/Banner";
import { GET_DIRECTORS } from "../../graphql/Queries";

import "./Directors.css";

function Directors(){

     const { data, loading, error } = useQuery(GET_DIRECTORS);
    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{error.message}</pre>;

    const directors = data?.getAllRegisti;
    const randomDirectorNumber =  Math.floor(Math.random() * directors.length);
    const randomDirector = directors[randomDirectorNumber];

    return (
    
        <>
            <div className="directors-container">
                <DirectorHeadline/>
                <Banner director={randomDirector}/>
            </div>
            <DirectorList/>


        </>
    )



}



export default Directors;