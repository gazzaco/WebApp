import React from 'react';

const GalleryCard = ({ imageUrl, caption, likes, author }) => {
  return (
    <div className="gallery-card">
      <div className="card-image-wrapper">
        <img src={imageUrl} alt={caption} className="card-image" />
      </div>
      <div className="card-content">
        <h4 className="card-caption orbitron">{caption}</h4>
        <div className="card-footer">
          <span className="card-author">By {author}</span>
          <span className="card-likes">
            ♥ {likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
