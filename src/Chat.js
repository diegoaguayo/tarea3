import React, { useEffect, useState, Component } from 'react';
import {socket} from "./services/socket";
import {useForm} from "react-hook-form";

//component chat recibe userrname

export default function Chat() {

    const [username, setUsername] = useState("guest");
  
    return (
      <div>
        <h2> CENTRO DE CONTROL </h2>
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
            <h4>Nombre de usuario: <strong>{props.username}</strong></h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                Cambiar nombre de usuario:<br/>
                <input type="text" placeholder="" name="username" {...register('username')} />
                </label>
                <input type="submit" value="Actualizar"/>
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
            <ShowMessage msg={msg}/>
    );
  
    useEffect(() => {
      socket.on("CHAT", data => logMsg(data));
    }, []);
  
    return (
      <div>
        <h4>LOG MENSAJES:</h4>
            {messagesList}
      </div>
      
    );
}

function ShowMessage({msg}) {
    return (
        <section style={{padding: "10px", border: "1px solid black"}}>
            <strong>username: {msg.name} <br/></strong>
            Date: {new Date(msg.date).toUTCString()} <br/>
            <strong>Message: {msg.message}</strong>
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
                Mensaje: <br/>
                <textarea type="text" placeholder="" name="message" {...register("message")} />
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>


    )
    
}

