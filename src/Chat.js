import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";
import {useForm} from "react-hook-form";

//component chat recibe userrname

function LogIn(props) {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
       props.setUsername(data.username)
    }
    return (
        <div>
            <p>Current username: {props.username}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                Name:
                <input type="text" placeholder="username" name="username" {...register('username')} />
                </label>
                <input type="submit"/>
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