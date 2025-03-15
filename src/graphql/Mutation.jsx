import { gql } from '@apollo/client';

export const CREATE_UTENTE = gql`
    mutation CreateUtente($input: CreateUtenteRequest!) {
        createUtente(createUtenteRequest: $input) {
            id
            email
            nome
            cognome
            ruolo
        }
    }
`;