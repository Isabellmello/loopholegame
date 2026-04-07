import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Gameplay } from "./pages/Gameplay";
import { Character } from "./pages/Character";
import { Enemies } from "./pages/Enemies";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "gameplay", Component: Gameplay },
      { path: "character", Component: Character },
      { path: "enemies", Component: Enemies },
      { path: "contact", Component: Contact },
    ],
  },
]);
