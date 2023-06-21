import React from 'react';
import './index.css';
import { LocationList } from './components/LocationList';
import { ApolloProvider } from '@apollo/client';
import client from './services/client';
import LocationItem from './components/LocationItem';
import { useState } from 'react';
import AddNewItem from './components/AddNewItem';

function App() {
  const [locationId, setLocationId] = useState("");
  const [showAddItem, setShowAddItem] = useState(false);


  return (
    <ApolloProvider client={client}>
      <div className="App w-full flex">
        <LocationList setLocationId={setLocationId} setShowAddItem={setShowAddItem} />
        {locationId && <LocationItem id={locationId} />}
        {showAddItem && <AddNewItem />}
      </div></ApolloProvider>
  );
}

export default App;
