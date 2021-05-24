import React, { useEffect, useState, Component } from 'react';
import Popup from 'reactjs-popup';
import {socket} from "./services/socket";
import Map from './Map';

import 'reactjs-popup/dist/index.css';


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
            <ShowFlight flight={flight} passengerList={passengerList(flight.passengers)}/>
        </li>
    );

  function passengerList(passengers) {
    return passengers.map((p) =>
    <ShowPassenger passenger={p}/>
);
  }

  

  return (
    <div>
      <Map flights={flights}/>
      <button onClick={() => getFlights()}>
        Refresh Flights
      </button>
      <h2> INFORMACIÓN DE LOS VUELOS </h2>
      <ul id="sideList">
        {flightList}
      </ul>
    </div>
  );
}

const ShowFlight = ({flight, passengerList}) => (
  <Popup trigger={<button> {flight.code}</button>} position="right center">
    <div>
      <h3>INFORMACIÓN DEL VUELO</h3>
      <p>Code: {flight.code}</p>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Number of seats: {flight.seats}</p>
      <ShowPassengers passengers={passengerList}/>
    </div>
  </Popup>
);

const ShowPassengers = ({passengers}) => (
  <Popup trigger={<button> Passengers</button>} position="right center">
    <div>
      <h4>Pasajeros</h4>
      {passengers}
    </div>
  </Popup>
);

const ShowPassenger = ({passenger}) => (
    <p>
      Nombre: {passenger.name}, Edad: {passenger.age}
    </p>
);




//component chat recibe userrname
//component mapa
//component flights info
