import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.taddy.org",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/JSON",
    // "X-API-KEY": process.env.TADDY_API_KEY,
    // "X-USER-ID": process.env.TADDY_USER_ID
    "X-API-KEY": "f96cd004b23eb23c834f2e6e7e6331aa0aca4024d6e16a74e8358e1c6171424c949a568942c8fbe62b9beb7cdd07cd8e81",
"X-USER-ID": "346"
  },
});

export { client };
