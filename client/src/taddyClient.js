import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.taddy.org",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/JSON",
    "X-API-KEY":
      "899e058f600526f593e417216f5f5a0c56e992807f36b2187bfb57edac4e01a95c42dac8c884ff2113ddb63d7c522a4004",
    // process.env.TADDY_API_KEY,
    "X-USER-ID": "345",
    // process.env.TADDY_USER_ID
  },
});

export { client };
