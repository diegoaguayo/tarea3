import React, { useEffect, useState, Component } from 'react';
import socketIOClient from "socket.io-client";

//component chat recibe userrname
var _username = "guest"

function LogIn() {
    const [username, setUsername] = useState("guest");

    const handleSubmit = (event) => {
        _username = event.target.value;
        setUsername(event.target.value);
    }

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setUsername(event.target.value)
    }
        
    return (
        <div>
            <p>Current username: {_username}</p>
            <form onSubmit={handleSubmit}>
                <label>
                Change username:
                <input type="text" value={username} onChange={handleInputChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
    
}

function ChatLog() {
    return 2+2
}

function SendMessage() {
    return 1 +1;
}

export default function Chat() {
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
  
    }, []);
  
    return (
      <div>
        <p> CENTRO DE CONTROL </p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <LogIn message="remember to drink some water" />
      </div>
      
    );
  }