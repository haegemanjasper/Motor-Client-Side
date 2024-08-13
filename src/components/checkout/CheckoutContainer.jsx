import React, { useContext, useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartSummary from "../../components/shop/cart-summary";
import PaymentForm from "./PaymentForm";
import { ShopContext } from "../../context/shop-context";
import { validateForm } from "./CheckoutValidateForm"; // Import de validatiefuncties

const CheckoutContainer = () => {
    const navigate = useNavigate();
    const shopContext = useContext(ShopContext);

    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        billingAddress: "",
        city: "",
        zip: "",
        email: "",
        paymentMethod: "Visa",
        location: "",
    });
    const [locations, setLocations] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchLocations = async () => {
            const authToken = localStorage.getItem("jwtToken");

            if (!authToken) {
                setError(new Error("No auth token found"));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:9000/api/huurlocaties",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data && Array.isArray(data.items)) {
                    setLocations(data.items);
                } else {
                    console.error("Unexpected data structure:", data);
                }
            } catch (error) {
                setError(error);
                console.error("Error fetching locations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        setTotalAmount(shopContext.getTotalCartAmount());
    }, [shopContext]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        const authToken = localStorage.getItem("jwtToken");

        if (!authToken) {
            setError(new Error("No auth token found"));
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:9000/api/betalingen",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken}`,
                    },
                    body: JSON.stringify({
                        bedrag: totalAmount,
                        betaalmethode: formData.paymentMethod,
                        datum: new Date().toISOString(),
                        huurlocatieId: Number(formData.location),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            localStorage.setItem("userEmail", formData.email);
            navigate("/confirmation");
            shopContext.clearCart();
        } catch (error) {
            setError(error);
            console.error("Error submitting payment:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems="flex-start"
            minHeight="100vh"
        >
            <PaymentForm
                formData={formData}
                formErrors={formErrors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                locations={locations}
                totalAmount={totalAmount}
            />
            <CartSummary />
        </Flex>
    );
};

export default CheckoutContainer;
