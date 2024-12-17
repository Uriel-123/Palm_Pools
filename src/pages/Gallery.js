import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/images/jacket1.jpeg', alt: 'Jacket 1' },
    { src: '/images/pool2.jpg', alt: 'Jacket 2' },
    { src: '/images/pool3.jpg', alt: 'Jacket 3' },
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
