import { useEffect } from "react";
import socketIO from "socket.io-client";

const WS = "http://localhost:3000";

const App = () => {
  useEffect(() => {
    const socket = socketIO(WS);
  }, []);

  return (
    <div>
      <h1 className="bg-cyan-500">Hello World</h1>
    </div>
  );
};

export default App;
