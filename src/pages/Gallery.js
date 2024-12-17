const images = [
  { src: '/images/jacket1.jpeg', alt: 'Jacket 1' },
  { src: '/images/jacket2.jpeg', alt: 'Jacket 2' },
  { src: '/images/jacket3.jpeg', alt: 'Jacket 3' },
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
