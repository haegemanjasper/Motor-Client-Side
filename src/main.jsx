import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/auth-context.jsx";
import theme from "./theme.js";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [{ index: true, element: <Home /> }],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ChakraProvider theme={theme}></ChakraProvider>
        </AuthProvider>
    </React.StrictMode>
);
