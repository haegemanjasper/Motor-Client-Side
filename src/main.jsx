import React from "react";
import ReactDOM from "react-dom";
import App from "./Home.jsx";
import theme from "./customTheme.js";
import Navigatiebar from "./components/Navigatiebar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, NotFound, Models, Routes, Home } from "./pages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/motors", element: <Models /> },
  { path: "/routes", element: <Routes /> },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navigatiebar />
    </ChakraProvider>
    <RouterProvider router={router} />
  </React.StrictMode>
);
