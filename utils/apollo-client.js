import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client';
import {QUERY_BASE_URL } from './global';
const httpLink = new HttpLink({
  uri: QUERY_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },

});


const cache = new InMemoryCache();

const client = new ApolloClient({
  link: from([httpLink]),
  cache
});

export default client;


