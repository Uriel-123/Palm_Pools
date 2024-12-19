import React from 'react';
import jacket1 from '../assets/images/jacket1.jpeg';
import testImage from '../assets/images/133719700998064597.jpg';

const images = [
  { src: jacket1, alt: 'Jacket 1' },
  { src: testImage, alt: 'Test Image' },
];

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: '200px', height: 'auto', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
