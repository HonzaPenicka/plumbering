'use client';

// Importujte hned na začátek — načte defaultní ikony
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export default function MapExample() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const response = await fetch(
        'https://nominatim.openstreetmap.org/search?format=json&q=Ječná 548/7, Praha'
      );
      const data = await response.json();
      if (data[0]) {
        setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    };

    fetchCoordinates();
  }, []);

  if (!position) return <p style={{ height: '400px', width: '100%' }}>Loading map...</p>;

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />
      <Marker position={position}>
        <Popup>
          <div>
            <p>Here we are! 😊</p>
            <p><b>Ječná 547/8, Praha</b></p>
            <div>
              <p><b>review</b>:</p>
              <a href='https://g.page/r/CQFYGniBi4TqEBM/review'>https://g.page/r/CQFYGniBi4TqEBM/review</a>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
