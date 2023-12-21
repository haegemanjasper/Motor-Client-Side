import React from "react";
import ReactDOM from "react-dom";
import theme from "./customTheme.js";
import Navigatiebar from "./components/Navigatiebar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Contact,
  NotFound,
  Models,
  Locations,
  Home,
  Login,
  Cart,
} from "./pages.jsx";
import { ShoppingCartProvider } from "./components/extra/cart/ShoppingCartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/motors", element: <Models /> },
  { path: "/locations", element: <Locations /> },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ShoppingCartProvider>
        <Navigatiebar />
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
