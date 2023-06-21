import React from 'react';
import './index.css';
import { LocationList } from './components/LocationList';
import { ApolloProvider } from '@apollo/client';
import client from './services/client';
import LocationItem from './components/LocationItem';
import { useState } from 'react';

function App() {
  const [locationId, setLocationId] = useState("");

  return (
    <ApolloProvider client={client}>
      <div className="App w-full flex">
        <LocationList setLocationId={setLocationId}/>
        <LocationItem id={locationId}/>
      </div></ApolloProvider>
  );
}

export default App;
