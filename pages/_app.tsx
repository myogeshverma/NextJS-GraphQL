import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import SharedContextProvider from '../context/sharedContext';
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";



function MyApp({ Component, pageProps,  }: AppProps) {
  return (
        <Layout>
          <ApolloProvider client={client}>
          <SharedContextProvider>
            <Component {...pageProps} />
          </SharedContextProvider>
          </ApolloProvider>
        </Layout>)
}
export default MyApp
