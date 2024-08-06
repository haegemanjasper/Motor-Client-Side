import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/auth-context.jsx";
import theme from "./theme.js";
import Home from "./pages/home.jsx";
import Root from "./root.jsx";
import Footer from "./components/footer/footer.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import AboutUs from "./pages/aboutus.jsx";
import RentABike from "./pages/rentabike.jsx";
import Profile from "./pages/profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            { path: "/aboutus", element: <AboutUs /> },
            { path: "/rentabike", element: <RentABike /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
                <Footer />
            </ChakraProvider>
        </AuthProvider>
    </React.StrictMode>
);
