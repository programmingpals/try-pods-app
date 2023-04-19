import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api.taddy.org",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/JSON",
    "X-API-KEY":process.env.TADDY_API_KEY,
    "X-USER-ID": process.env.TADDY_USER_ID
  },
});

export { client }