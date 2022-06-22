import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ov08g91djb01w780u64fi3/master',
  cache: new InMemoryCache()
})