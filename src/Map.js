import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle } from 'react-leaflet'

//component chat recibe userrname
import './Map.css';

export default function Map({flights}) {

  const displacementsList = flights.map((flight) =>
        <Displacement key={flight.code} flight={flight}/>
  );
    

    return (
      <div>
        <p>MAPA "En vivo"</p>
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {displacementsList}
        </MapContainer>
      </div>
      
    );
  }


function Displacement({flight}) {
    const displacement = [flight.origin, flight.destination];
    return (
      <div>
        <Circle center={flight.origin} radius={200} />
        <Polyline positions={displacement} />
        <Circle center={flight.destination} radius={1000} />
      </div>
    )
  }











  /*
      const [flights, setFlights] = useState([]);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      socket.on("FLIGHTS", data => {
        setFlights(JSON.stringify(data));
      });
  
      socket.on("POSITION", data => {
        setFlights(JSON.stringify(data));
      });
  
    }, []);
  
  */