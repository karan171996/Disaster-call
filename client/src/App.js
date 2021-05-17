import { useState, useEffect, useRef } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3030";

function App() {
  const [response, setResponse] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on("announcement", (data) => {
      console.log("data", data.message);
      setResponse(data);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  console.log("response", response);
  return (
    <div className="App">
      <h1>Hello karan</h1>
    </div>
  );
}

export default App;
