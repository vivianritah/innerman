import React, { useState } from 'react';
import './gallery.css';


const imagesData = [
  { id: 1, src: process.env.PUBLIC_URL + '/image1.jpg', alt: 'Image 1' },
  { id: 2, src: process.env.PUBLIC_URL + '/image2.jpg', alt: 'Image 2' },
  { id: 3, src: process.env.PUBLIC_URL + '/image3.jpg', alt: 'Image 3' },
  { id: 4, src: process.env.PUBLIC_URL + '/image4.jpg', alt: 'Image 4' },
  { id: 5, src: process.env.PUBLIC_URL + '/image5.jpg', alt: 'Image 5' },
  { id: 6, src: process.env.PUBLIC_URL + '/image6.jpg', alt: 'Image 6' },
  { id: 7, src: process.env.PUBLIC_URL + '/image7.jpg', alt: 'Image 7' },
  { id: 7, src: process.env.PUBLIC_URL + '/background1.jpg', alt: 'Image 8' },
  { id: 7, src: process.env.PUBLIC_URL + '/background3.jpg', alt: 'Image 9' },
  { id: 7, src: process.env.PUBLIC_URL + '/background5.jpg', alt: 'Image 10' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h1>Image Gallery</h1>
      <div className="gallery-grid">
        {imagesData.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => openImage(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={closeImage}>
          <div className="gallery-modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="gallery-modal-close" onClick={closeImage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
