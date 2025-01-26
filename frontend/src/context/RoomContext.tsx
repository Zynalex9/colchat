import { createContext, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socketIO from "socket.io-client";

export const RoomContext = createContext<null | any>(null);

const WS = "http://localhost:8080";

interface RoomContextProviderProps {
  children: ReactNode;
}

export const RoomContextProvider: React.FC<RoomContextProviderProps> = ({
  children,
}) => {
  const ws = socketIO(WS);
  const navigator = useNavigate()
  useEffect(() => {
    ws.on("room-created", (roomId) => {
      console.log(roomId);
      navigator(`/room/${roomId}`)
    });
    return () => {
      ws.disconnect();
    };
  }, []);

  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
};
