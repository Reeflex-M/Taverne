import { createRoot } from "react-dom/client";
import "./assets/style/index.css";
import "./assets/style/custom.css";
import App from "./App.jsx";
import CharactersContextProvider from "./context/CharactersContext.jsx";

createRoot(document.getElementById("root")).render(
  <CharactersContextProvider>
    <App />
  </CharactersContextProvider>
);
