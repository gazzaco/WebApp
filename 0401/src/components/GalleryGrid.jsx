import React from 'react';
import GalleryCard from './GalleryCard';

const GalleryGrid = ({ cards, columns = 3 }) => {
  // Use inline style or CSS class for columns
  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid" style={gridStyle}>
        {cards.map((card, index) => (
          <GalleryCard 
            key={index}
            imageUrl={card.imageUrl}
            caption={card.caption}
            likes={card.likes}
            author={card.author}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
