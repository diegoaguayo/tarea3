import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";
import Map from './Map';




export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [flightsByCode, setFlightsByCode] = useState({});

  useEffect(() => {
    socket.emit("FLIGHTS")
    socket.on("FLIGHTS", data => {
      setFlights(data);
    });

  }, []);

  function getFlights() {
    socket.emit("FLIGHTS")
  }

  const flightList = flights.map((flight) =>
        <li>
            <ShowFlight flight={flight}/>
        </li>
    );

  return (
    <div>
      <Map flights={flights}/>
      <p> INFORMACION DE LOS VUELOS </p>
      <button onClick={() => getFlights()}>
        Refresh Flights
      </button>
      <ul>
        {flightList}
      </ul>
    </div>
  );
}

function ShowFlight({flight}) {
  return flight.code
}




//component chat recibe userrname
//component mapa
//component flights info
