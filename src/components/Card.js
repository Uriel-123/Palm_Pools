import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
