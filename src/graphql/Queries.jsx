import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
    query GetAllFilm {
        getAllFilm {
            id
            titolo
            imageURL
            annoUscita
            durata
            genere
            descrizione
        }
    }
`;

export const GET_DIRECTORS = gql`
    query GetAllRegisti {
        getAllRegisti {
            id
            nome
            cognome
            dataNascita
            nazionalita
            biografia
            imageURL
        }
    }
`;

const getFilmPerGenere = (genere) => {
    const GET_FILTERED_MOVIES = gql`
        query GetFilmPerGenere {
            getFilmPerGenere(genereFilmFilter: "${genere}") {
                id
                titolo
                imageURL
                annoUscita
                durata
                genere
                descrizione
            }
        }
    `;
    return GET_FILTERED_MOVIES;
};

const getFilmRegista = (idRegista) => {
    const GET_FILM = gql`
        query Regista {
            regista(id: ${idRegista}) {
                id
                nome
                cognome
                dataNascita
                nazionalita
                biografia
                imageURL
                getFilm {
                    id
                    titolo
                    imageURL
                    annoUscita
                    durata
                    genere
                    descrizione
                }
            }
        } 
    `;
    return GET_FILM;
};

export default { getFilmPerGenere, getFilmRegista };
