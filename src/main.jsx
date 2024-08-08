import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { ShopContextProvider } from "./context/shop-context.jsx";
import ConfirmationPage from "./components/shop/confirmationpage.jsx";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx";
import Checkout from "./pages/checkout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            { path: "/shop", element: <Shop /> },
            { path: "/cart", element: <Cart /> },
            { path: "/checkout", element: <Checkout /> },
            { path: "/confirmation", element: <ConfirmationPage /> },
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
                <ShopContextProvider>
                    <RouterProvider router={router} />
                    <Footer />
                </ShopContextProvider>
            </ChakraProvider>
        </AuthProvider>
    </React.StrictMode>
);
