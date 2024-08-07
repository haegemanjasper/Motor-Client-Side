import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import RegisterFormLayout from "./registerFormLayout";
import validateForm from "./registerValidateForm";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        naam: "",
        voornaam: "",
        email: "",
        straat: "",
        huisnummer: "",
        postcode: "",
        stad: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const toast = useToast();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const response = await fetch(
            "http://localhost:9000/api/klanten/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        if (response.ok) {
            console.log("Registration successful");

            toast({
                title: "Registration successful.",
                description: "You can now log in with your credentials.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            setErrors({});
            setFormData({
                naam: "",
                voornaam: "",
                email: "",
                straat: "",
                huisnummer: "",
                postcode: "",
                stad: "",
                password: "",
            });

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } else {
            const result = await response.json();
            console.error("Registration failed:", result);
            setErrors(result.details || {});
        }
    };

    return (
        <RegisterFormLayout
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}
