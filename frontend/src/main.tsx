import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RoomContextProvider } from "./context/RoomContext.tsx";

createRoot(document.getElementById("root")!).render(
  <RoomContextProvider>
    <App />
  </RoomContextProvider>
);
