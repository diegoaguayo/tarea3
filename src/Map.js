import React, { useEffect, useState, Component } from 'react';
import socketIOClient from "socket.io-client";

//component chat recibe userrname

export default function Map() {
    const [flights, setFlights] = useState([]);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const socket = socketIOClient("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/", {
        path: "/flights"
      });
      socket.emit("FLIGHTS")
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