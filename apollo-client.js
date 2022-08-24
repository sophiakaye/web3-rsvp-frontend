import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/sophiakaye/catoshe-subgraph",
  cache: new InMemoryCache(),
});

export default client;