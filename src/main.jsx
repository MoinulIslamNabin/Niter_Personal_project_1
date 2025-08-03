import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import Routine from "./Components/Home/Routine/Routine";
import Docs from "./Components/Home/Docs/Docs";
import Books from "./Components/Home/Docs/Books/Books";
import Note from "./Components/Home/Docs/Note/Note";
import Questions from "./Components/Home/Docs/Questions/Questions";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/notes",
        element: <Note></Note>,
      },
      {
        path: "/questions",
        element: <Questions></Questions>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
