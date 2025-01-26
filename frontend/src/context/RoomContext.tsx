import { createContext, ReactNode, useEffect, useState } from "react";
import socketIO from "socket.io-client";

export const RoomContext = createContext<null | any>(null);

const WS = "http://localhost:8080";

interface RoomContextProviderProps {
  children: ReactNode;
}

export const RoomContextProvider: React.FC<RoomContextProviderProps> = ({ children }) => {
  const [ws, setWs] = useState<any>(null);

  useEffect(() => {
    const socket = socketIO(WS);
    setWs(socket);

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <RoomContext.Provider value={{ws}}>{children}</RoomContext.Provider>
  );
};