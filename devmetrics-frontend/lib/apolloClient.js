import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // Adjust this URI to where your GraphQL server is hosted
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache()
});

export default client;
