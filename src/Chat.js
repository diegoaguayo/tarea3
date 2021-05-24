import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";
import {useForm} from "react-hook-form";

//component chat recibe userrname

export default function Chat() {

    const [username, setUsername] = useState("guest");
  
    return (
      <div>
        <p> CENTRO DE CONTROL </p>
        <LogIn username={username} setUsername={setUsername}/>
        <ChatLog/>
        <SendMessage username={username}/>
      </div>
      
    );
  }

function LogIn(props) {

    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
       props.setUsername(data.username);
       reset({});
    }
    return (
        <div>
            <p>Current username: {props.username}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                Name:<br/>
                <input type="text" placeholder="username" name="username" {...register('username')} />
                </label>
                <input type="submit"/>
            </form>
        </div>


    )
    
}

function ChatLog() {
    const [msgs, setMsg] = useState([]);

    function logMsg(data) {
        setMsg( oldArray => [...oldArray, data])
    }

    const messagesList = msgs.map((msg) =>
        <li>
            <ShowMessage msg={msg}/>
        </li>
    );
  
    useEffect(() => {
      socket.on("CHAT", data => logMsg(data));
    }, []);
  
    return (
      <div>
        <p>LOG MENSAJES:</p>
        <ul>
            {messagesList}
        </ul>
      </div>
      
    );
}

function ShowMessage({msg}) {
    return (
        <section style={{border: "1px solid black"}}>
            Name: {msg.name} <br/>
            Date: {msg.date} <br/>
            Message: {msg.message}
        </section>
    );
}

function SendMessage(props) {
    
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        const msg = {name: props.username, message: data.message};
        socket.emit("CHAT", msg);
        reset({});
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                Message: <br/>
                <textarea type="text" placeholder="" name="message" {...register("message")} />
                </label>
                <input type="submit" value="Send"/>
            </form>
        </div>


    )
    
}

