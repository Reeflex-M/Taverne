import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ApiCharactersPage from "./pages/ApiCharactersPage";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import CreateCharacter from "./pages/CreateCharacter";
import LocalCharactersPage from "./pages/LocalCharactersPage";
import SpreadOp from "./pages/SpreadOp";
import AllCharacters from "./pages/AllCharacters";
import ModifyCharacterPage from "./pages/ModifyCharacterPage";

const router = createBrowserRouter([
  {
    path: "/", // correspon à la racine du site
    element: <Layout />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/ApiCombattants", element: <ApiCharactersPage /> },
      { path: "/creer-un-personnage", element: <CreateCharacter /> },
      { path: "/combattants-locaux", element: <LocalCharactersPage /> },
      { path: "/tous-les-combattants", element: <AllCharacters /> },
      { path: "/modifier-personnage/:id", element: <ModifyCharacterPage /> },
      { path: "/spread", element: <SpreadOp /> },
      { path: "/*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
