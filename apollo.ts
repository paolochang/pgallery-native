import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://perfect-chicken-31.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export default client;
