import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2 className='name'>{beer.name}</h2>
      <p className='tagline'>{beer.tagline}</p>
    </div>
  );
};

export default BeerCard;
