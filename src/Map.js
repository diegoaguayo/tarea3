import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";
import leaflet, { MapContainer, TileLayer, Marker, Popup, Polyline, Circle} from 'react-leaflet'
import L from "leaflet";

//component chat recibe userrname
import './Map.css';

export default function Map({flights}) {

  const displacementsList = flights.map((flight) =>
        <Displacement key={flight.code} flight={flight}/>
  );

  const [airplanePositions, setAirplanePositions] = useState({});

  const [positionPoints, setPositionPoints] = useState([]);

  useEffect(() => {
    socket.on("POSITION", data => {
      logPositions(data);
    });

  }, []);

  function logPositions(data) {
    setPositionPoints( oldArray => [...oldArray, data])
    var angle = 0;
    if (airplanePositions[data.code]) {
      const last_pos = airplanePositions[data.code].position
      const new_pos = data.position
      var angleDeg = Math.atan2(last_pos[0] - new_pos[0], last_pos[1] - new_pos[1]) * 180 / Math.PI;
    }
    airplanePositions[data.code] = {...data, angle: angleDeg};
    setAirplanePositions({...airplanePositions});
  }

  const loggedPositions = positionPoints.map((flight) =>
        <PaintPosition flight={flight}/>
  );

  const logAirplanePositions = Object.keys(airplanePositions).map((key) =>
    <DisplayAirplane airplane={airplanePositions[key]}/>
  );
  
    
  

  return (
    <div>
      <p>MAPA "En vivo"</p>
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {logAirplanePositions}
          {displacementsList}
          {loggedPositions}
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

function PaintPosition({flight}) {
  return (
    <Circle center={flight.position} color="grey" radius={200} />
  )
}

function DisplayAirplane({airplane}) {

  const size = 35

  const myIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/20_airtransportation.svg',
    iconSize  : [size, size],
    iconAnchor: [size/2, size/2],
  });

  return (
    <Marker position={airplane.position} icon={myIcon}>
            <Popup>
              Airplane: {airplane.code}
            </Popup>
    </Marker>
  )
}
