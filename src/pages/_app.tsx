import { ApolloClient,ApolloProvider,InMemoryCache,HttpLink,createHttpLink,from } from '@apollo/client';
import {ErrorLink, onError} from '@apollo/client/link/error';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const errorLink = onError(({graphQLErrors,networkError}) => {
    if(graphQLErrors) {
      graphQLErrors.map(({message,locations,path}) => {
        alert(`Graphql Error ${message}`)
      })  
    }
    if(networkError) {
      console.log(networkError,"networkError")
    }
  })

  const link = from([
    errorLink,
    createHttpLink({uri:"https://graphqlzero.almansi.me/api"})
  ])

    console.log(link,"link")
    
  const client = new ApolloClient({
    cache:new InMemoryCache(),
    link:link
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}
