import { createContext, useState, useEffect } from "react";
import { useAuth } from "../context/auth-context";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [motors, setMotors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { isAdmin } = useAuth();

    useEffect(() => {
        const fetchMotors = async () => {
            const authToken = localStorage.getItem("jwtToken");

            if (!authToken) {
                setError(new Error("No auth token found"));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:9000/api/motoren",
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setMotors(data.items || []);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMotors();
    }, []);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        setCartItems(storedCart ? JSON.parse(storedCart) : {});
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = motors.find(
                    (motor) => motor.id === Number(item)
                );
                if (itemInfo) {
                    totalAmount +=
                        cartItems[item] *
                        parseFloat(itemInfo.huurprijs_per_dag);
                }
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 1) - 1, 0),
        }));
    };

    const removeItemFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const clearCart = () => {
        setCartItems({});
    };

    const checkout = () => {
        // Implement checkout logic
    };

    const deleteMotor = async (id) => {
        if (!isAdmin) return;

        const authToken = localStorage.getItem("jwtToken");
        try {
            const response = await fetch(
                `http://localhost:9000/api/motoren/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to delete motor");
            }

            setMotors((prev) => prev.filter((motor) => motor.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    const editMotor = async (id, updatedData) => {
        if (!isAdmin) return;

        const authToken = localStorage.getItem("jwtToken");
        const { id: _id, ...formattedData } = updatedData;

        formattedData.beschikbaarheid =
            formattedData.beschikbaarheid === "true" ||
            formattedData.beschikbaarheid === true;

        if (formattedData.datum) {
            const date = new Date(formattedData.datum);
            formattedData.datum = date.toISOString().split("T")[0];
        }

        try {
            const response = await fetch(
                `http://localhost:9000/api/motoren/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                    body: JSON.stringify(formattedData),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to update motor: ${response.statusText}`
                );
            }

            const updatedMotor = await response.json();
            setMotors((prev) =>
                prev.map((motor) => (motor.id === id ? updatedMotor : motor))
            );
        } catch (err) {
            setError(err);
        }
    };

    const createMotor = async (motorData) => {
        if (!isAdmin) return;

        const authToken = localStorage.getItem("jwtToken");

        try {
            const response = await fetch("http://localhost:9000/api/motoren", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify(motorData),
            });

            if (!response.ok) {
                throw new Error(
                    `Failed to create motor: ${response.statusText}`
                );
            }

            const newMotor = await response.json();
            setMotors((prev) => [...prev, newMotor]);
        } catch (err) {
            setError(err);
        }
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        removeItemFromCart,
        getTotalCartAmount,
        clearCart,
        checkout,
        motors,
        loading,
        error,
        deleteMotor,
        editMotor,
        createMotor,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};
