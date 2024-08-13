// utils/validation.js

export const validateForm = (formData) => {
    const errors = {};

    // Naam validatie: niet leeg, geen cijfers
    if (!formData.name.trim()) {
        errors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
        errors.name = "Name cannot contain numbers";
    }

    // Card Number validatie: 16 cijfers
    if (!/^\d{16}$/.test(formData.cardNumber)) {
        errors.cardNumber = "Card number must be 16 digits";
    }

    // Expiry Month validatie: 1-12
    if (!/^(0[1-9]|1[0-2])$/.test(formData.expiryMonth)) {
        errors.expiryMonth = "Expiry month must be between 01 and 12";
    }

    // Expiry Year validatie: 2 cijfers
    if (!/^\d{2}$/.test(formData.expiryYear)) {
        errors.expiryYear = "Expiry year must be 2 digits";
    }

    // Billing Address validatie: niet leeg
    if (!formData.billingAddress.trim()) {
        errors.billingAddress = "Billing address is required";
    }

    // City validatie: geen cijfers
    if (!formData.city.trim()) {
        errors.city = "City is required";
    } else if (/\d/.test(formData.city)) {
        errors.city = "City cannot contain numbers";
    }

    // ZIP validatie: 5 cijfers
    if (!/^\d{5}$/.test(formData.zip)) {
        errors.zip = "ZIP code must be 5 digits";
    }

    // Email validatie: ingevuld en geldig
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Invalid email address";
    }

    // Payment Method validatie: moet geselecteerd zijn
    if (!formData.paymentMethod) {
        errors.paymentMethod = "Payment method is required";
    }

    // Location validatie: moet geselecteerd zijn
    if (!formData.location) {
        errors.location = "Location must be selected";
    }

    return errors;
};
