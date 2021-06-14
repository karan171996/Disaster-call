import { useState, useEffect } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3030";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(SOCKET_SERVER_URL);

    socket.on("announcement", (data) => {
      console.log("data", data.message);
      setResponse(data);
    });
    return () => {
      socket.disconnect();
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
