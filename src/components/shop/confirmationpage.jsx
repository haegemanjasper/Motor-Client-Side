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
        }
    }, []);

    const sendConfirmationEmail = async (recipientEmail) => {
        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recipientEmail: recipientEmail,
                    subject: "Betalingsbevestiging",
                    text: "Dit is een bevestiging van uw betaling. Bedankt voor uw bestelling.",
                }),
            });

            if (response.ok) {
                console.log("E-mail verzonden");
            } else {
                console.error(
                    "Er is een fout opgetreden bij het verzenden van de e-mail"
                );
            }
        } catch (error) {
            console.error(
                "Er is een fout opgetreden bij het verzenden van de e-mail:",
                error
            );
        }
    };

    const handleReturnHome = () => {
        navigate("/");
    };

    return (
        <Box textAlign="center" py="20">
            <Text fontSize="2xl" mb="4">
                Thank you for your order.
            </Text>
            <Text mb="8">A confirmation email has been sent to {email}.</Text>
            <Button colorScheme="red" onClick={handleReturnHome}>
                Return Home
            </Button>
        </Box>
    );
};

export default ConfirmationPage;
