import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import {QUERY_BASE_URL } from './global';
import { relayStylePagination, offsetLimitPagination } from "@apollo/client/utilities";
const httpLink = new HttpLink({
  uri: QUERY_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },

});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache
});

export default client;


