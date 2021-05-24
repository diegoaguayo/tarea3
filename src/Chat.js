import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";

//component chat recibe userrname

function LogIn(props) {
        

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
          }
        props.setUsername(event.target.value);
    }

    const handleInputChange = (event) => {
        if (event) {
            event.preventDefault();
          }
        props.setUsername({
            ...props.username,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div>
            <p>Current username: {props.username}</p>

            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" value="" onChange={handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>


    )
    
}

function ChatLog() {
    return 2+2
}

function Message() {
    return 4+4
}

function SendMessage() {
    return 1 +1;
}

export default function Chat() {

    const [username, setUsername] = useState("guest");
    const [flights, setFlights] = useState([]);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      socket.on("CHAT", data => {
        setFlights(JSON.stringify(data));
      });
  
      socket.on("POSITION", data => {
        setFlights(JSON.stringify(data));
      });
  
    }, []);
  
    return (
      <div>
        <p> CENTRO DE CONTROL </p>
        <LogIn username={username} setUsername={setUsername}/>
      </div>
      
    );
  }