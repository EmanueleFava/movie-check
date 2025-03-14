import "./LastReleases.css"
import LastHeadline from "./LastHeadline";
import Card from "../card/Card";


const data = {
    "id": 1,
    "titolo": "Avatar: La via dell'acqua",
    "imageURL": "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "annoUscita": 2025,
    "durata": 138,
    "genere": "Drammatico",
    "descrizione": `Avatar - La via dell'acqua (Avatar: The Way of Water)[1][2] è un film del 2022 co-scritto, diretto, co-prodotto e co-montato da James Cameron.[3]
    Il film è il sequel di Avatar (2009),[4] è stato prodotto dalla 20th Century Studios[5][6] e sceneggiato da Rick Jaffa e Amanda Silver e dal regista Cameron, che ha anche preso parte al montaggio e alla produzione.[7][8][9][10] Diversi membri del cast del primo film riprendono i loro ruoli, a cui si aggiungono tra i tanti Cliff Curtis, Edie Falco e Kate Winslet. Nel film Jake Sully, Neytiri e i loro figli devono lasciare la loro casa cercando rifugio in un'altra regione di Pandora sul mare.[11][12]
    Si tratta del film più costoso mai realizzato; con un budget stimato tra i 350 e i 460 milioni di dollari,[13][14][15] ha ottenuto un notevole successo di incassi e critica,[16][17] stabilendo numerosi record al botteghino e divenendo il terzo film con maggiori incassi nella storia del cinema, ed è stato candidato a numerosi premi cinematografici, tra i quali quattro Oscar, vincendo quello per i migliori effetti speciali, due Golden Globe e due BAFTA`
}; 

function LastReleases() {

    return (

        <div className="last-releases">

            <LastHeadline/>
            
            <div className="card-group">
                <Card data={data}/>
                <Card data={data}/>
                <Card data={data}/>
            </div>
        </div>


    )

}




export default LastReleases;