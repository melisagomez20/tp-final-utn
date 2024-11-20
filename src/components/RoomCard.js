import React from 'react';

const RoomCard = ({ image, title, description }) => {
  return (
    <div className="room-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RoomCard;
