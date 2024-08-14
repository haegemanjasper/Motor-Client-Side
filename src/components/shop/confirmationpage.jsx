import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setEmail(storedEmail);
            sendConfirmationEmail(storedEmail);
        } else {
            navigate("/");
        }
    }, [navigate]);

    const sendConfirmationEmail = async (recipientEmail) => {
        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recipientEmail: recipientEmail,
                    subject: "Payment Confirmation",
                    text: "This is a confirmation of your payment. Thank you for your order.",
                }),
            });

            if (response.ok) {
                console.log("Email sent");
            } else {
                console.error("Error sending email");
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    const handleReturnHome = () => {
        navigate("/");
    };

    return (
        <Box
            textAlign="center"
            py="20"
            px={{ base: "4", md: "8" }}
            bg="gray.50"
        >
            <Text fontSize="3xl" fontWeight="bold" mb="6" color="green.500">
                Thank you for your order!
            </Text>
            <Text fontSize="lg" mb="8">
                A confirmation email has been sent to <strong>{email}</strong>.
            </Text>
            <Button colorScheme="blue" size="lg" onClick={handleReturnHome}>
                Return to Home
            </Button>
        </Box>
    );
};

export default ConfirmationPage;
