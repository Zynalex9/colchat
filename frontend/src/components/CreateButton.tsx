import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

const CreateButton = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    if (ws) {
      console.log("Emitting create room event");
      ws.emit("create-room");
    } else {
      console.log("WebSocket connection not available");
    }
  };
  return (
    <button
      onClick={createRoom}
      className="bg-rose-400 text-white px-4 py-2 rounded-4xl shadow-2xl active:scale-110 transition-transform"
    >
      Create a meeting
    </button>
  );
};

export default CreateButton;
