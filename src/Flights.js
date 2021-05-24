import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";

import './App.css';

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    socket.on("FLIGHTS", data => {
      setFlights(JSON.stringify(data));
    });

  }, []);

  function getFlights() {
    console.log("voy a solicitar los vuelos");
    socket.emit("FLIGHTS")
  }

  return (
    <div>
      <p> INFORMACION DE LOS VUELOS </p>
      <button onClick={() => getFlights()}>
        Get Flights
      </button>
      {flights}
    </div>
    
  );
}


//component chat recibe userrname
//component mapa
//component flights info
