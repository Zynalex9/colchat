import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

const Room = () => {
  const { id } = useParams();
  const { ws } = useContext(RoomContext);
  useEffect(() => {
    ws.emit("join-room",id);
  }, [id]);
  return (
    <div>
      <h1>Room id {id}</h1>
    </div>
  );
};

export default Room;
