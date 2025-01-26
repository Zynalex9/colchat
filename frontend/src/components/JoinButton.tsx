import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

const JoinButton = () => {
  const { ws } = useContext(RoomContext);
  const joinRoom = () => {
    if (ws) {
      console.log("Emitting join-room event");
      ws.emit("join-room");
    } else {
      console.log("WebSocket connection not available");
    }
  };
  return (
    <button
      onClick={joinRoom}
      className="bg-rose-400 text-white px-4 py-2 rounded-4xl shadow-2xl active:scale-110 transition-transform"
    >
      Join or Create a meeting
    </button>
  );
};

export default JoinButton;