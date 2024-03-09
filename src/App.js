import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import './App.css'

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.punkapi.com/v2/beers');
      setBeers(result.data);
    };
    fetchData();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
    <h1 className="beer-heading">Search Beer </h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Type Beer Name Here...."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
