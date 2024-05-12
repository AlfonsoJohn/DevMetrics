import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import React from 'react';
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;