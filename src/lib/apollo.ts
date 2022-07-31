import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl682bm7ucq8c01t7hkom7gu3/master',
  cache: new InMemoryCache()
})