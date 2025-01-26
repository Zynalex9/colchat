import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RoomContextProvider } from "./context/RoomContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RoomContextProvider>
      <App />
    </RoomContextProvider>
  </BrowserRouter>
);
