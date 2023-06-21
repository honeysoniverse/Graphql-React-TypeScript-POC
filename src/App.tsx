import React from 'react';
import { LocationList } from './components/LocationList';
import { ApolloProvider } from '@apollo/client';
import client from './services/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LocationList />
      </div></ApolloProvider>
  );
}

export default App;
