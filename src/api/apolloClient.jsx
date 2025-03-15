import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/movie-service", // Il tuo endpoint GraphQL
    credentials: "include", // Abilita CORS con credenziali (se necessarie)
    fetchOptions: {
      mode: "cors", // Esplicita che è una richiesta CORS
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
