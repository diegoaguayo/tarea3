import socketIOClient from "socket.io-client";

export const socket = socketIOClient("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/", {
        path: "/flights"
      });