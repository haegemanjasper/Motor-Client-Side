import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import theme from "./theme";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Register from "./pages/register";
import Login from "./pages/login";
import AboutUs from "./pages/aboutus";
import RentABike from "./pages/rentabike";
import Customers from "./pages/customers";
import Profile from "./pages/profile";
import Payments from "./pages/payments";
import Locations from "./pages/locations";
import ConfirmationPage from "./components/shop/confirmationpage";
import { ShopContextProvider } from "./context/shop-context";
import Root from "./root";

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
            { path: "/viewcustomers", element: <Customers /> },
            { path: "/viewpayments", element: <Payments /> },
            { path: "/viewlocations", element: <Locations /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ChakraProvider theme={theme}>
                <ShopContextProvider>
                    <RouterProvider router={router} />
                </ShopContextProvider>
            </ChakraProvider>
        </AuthProvider>
    </React.StrictMode>
);
