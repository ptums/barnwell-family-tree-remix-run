import React from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo-client'
import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from './api/trpc/[trpc]';
import "styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps) 
  return (
    <ApolloProvider client={apolloClient}>
        <Head>
          <meta charSet="utf-8" />
          <title>Barnwell Family Tree</title>
        </Head>
        <div className="w-full h-screen bg-tree-background bg-gray-400 bg-cover">         
          <Component {...pageProps} />        
        </div>
        </ApolloProvider>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(App);