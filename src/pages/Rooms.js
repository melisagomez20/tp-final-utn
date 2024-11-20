// Rooms.js
import React from 'react';

const rooms = [
  {
    id: 1,
    name: "Hab. Individual",
    image: "/images/room1.jpg", // Asegúrate de tener estas imágenes en tu carpeta 'public/images'
    description: "Hab. elegante y cómoda para una persona."
  },
  {
    id: 2,
    name: "Hab. Doble",
    image: "/images/room2.jpg",
    description: "Perfecta para dos personas, con todas las comodidades."
  },
  {
    id: 3,
    name: "Suite Presidencial",
    image: "/images/room3.jpg",
    description: "La mejor suite con vistas panorámicas."
  }
];

const Rooms = () => {
  return (
    <div>
      <h2>Habitaciones de Mels Hotel</h2>
      <div className="rooms-section">
        {rooms.map((room) => (
          <div key={room.id} className="room">
            <img
              src={room.image}
              alt={room.name}
              className="room-image"
            />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
