import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, from, HttpLink } from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const errorLink = onError(({ graphQLErrors, networkError}) =>{
    if(graphQLErrors) {
      graphQLErrors.map(({message, locations, path})=>{
        alert(`GraphQL error ${message}`)
      })
    }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://wpe-hiring.tokopedia.net/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);