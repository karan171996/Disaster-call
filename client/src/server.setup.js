import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3030";

export const socket = socketIOClient(SOCKET_SERVER_URL, {
  transports: ["polling"],
  forceNew: true,
});
