import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";

//component chat recibe userrname

export default function Map() {
    const [flights, setFlights] = useState([]);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      socket.on("FLIGHTS", data => {
        setFlights(JSON.stringify(data));
      });
  
      socket.on("POSITION", data => {
        setFlights(JSON.stringify(data));
      });
  
      document.title = `You clicked ${count} times`;
  
    }, []);
  
    return (
      <div>
        <p>MAPA "En vivo"</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      
    );
  }