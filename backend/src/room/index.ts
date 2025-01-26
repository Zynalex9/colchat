import { Socket } from "socket.io";
import { v4 } from "uuid";

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    console.log("Room created");
    const roomId = v4();
    socket.emit("room-created", roomId);
  };
  const joinRoom = (roomId:string) => {
    console.log("User joined the room", roomId);
  };
  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};
