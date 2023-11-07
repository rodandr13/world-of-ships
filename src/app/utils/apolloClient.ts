import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function create() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://vortex.korabli.su/api/graphql/glossary/',
    }),
    cache: new InMemoryCache(),
  });
}