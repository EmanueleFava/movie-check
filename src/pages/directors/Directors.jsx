import { Last } from "react-bootstrap/esm/PageItem";
import DirectorHeadline from "./directorHeadline/DirectorHeadline";
import DirectorList from './directorList/DirectorList'
import Banner from "../../components/banner/Banner";

import "./Directors.css";

function Directors(){


    const director = {
        nome: "Cristopher",
        cognome: "Nolan",
        dataNascita: 1970,
        nazionalita: "Londra",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg",
        biografia: "Considerato uno dei registi più influenti e popolari del XXI secolo,[1][2] è anche settimo tra quelli con i maggiori incassi nella storia del cinema, avendo fatto registrare un totale di 6,1 miliardi di dollari al box-office.[3] Ha diretto molti film acclamati dalla critica e di grande successo commerciale, come la trilogia del cavaliere oscuro (2005-2012)[4] (reboot della saga cinematografica di Batman, composta da Batman Begins, Il cavaliere oscuro e Il cavaliere oscuro - Il ritorno), e ad oggi ritenuta una delle migliori opere del genere supereroistico.[4][5][6] Oltre a ciò, gli viene riconosciuto il merito di aver esplorato un'ampia quantità di generi cinematografici: il neo-noir con Memento (2000), il thriller psicologico con Insomnia (2002) e The Prestige (2006), la fantascienza con Inception (2010) e Interstellar (2014), il film di guerra con Dunkirk (2017) e lo spionaggio con Tenet (2020). Dopo quest'ultima pellicola si è separato da Warner Bros. firmando un contratto con la Universal Pictures, sotto la quale ha trattato l'epopea biografica con Oppenheimer (2023) che gli è valsa la vittoria di 7 premi Oscar all'edizione del 2024, tra cui quelli come miglior film e miglior regista. "
    };
    

    return (
    
        <>
            <div className="directors-container">
                <DirectorHeadline/>
                <Banner director={director}/>
            </div>
            <DirectorList/>


        </>
    )



}



export default Directors;