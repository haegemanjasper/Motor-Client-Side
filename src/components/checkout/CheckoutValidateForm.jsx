export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
        errors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
        errors.name = "Name cannot contain numbers";
    }

    if (!/^\d{16}$/.test(formData.cardNumber)) {
        errors.cardNumber = "Card number must be 16 digits";
    }

    if (!/^(0[1-9]|1[0-2])$/.test(formData.expiryMonth)) {
        errors.expiryMonth = "Expiry month must be between 01 and 12";
    }

    if (!/^\d{2}$/.test(formData.expiryYear)) {
        errors.expiryYear = "Expiry year must be 2 digits";
    }

    if (!formData.billingAddress.trim()) {
        errors.billingAddress = "Billing address is required";
    }

    if (!formData.city.trim()) {
        errors.city = "City is required";
    } else if (/\d/.test(formData.city)) {
        errors.city = "City cannot contain numbers";
    }

    if (!/^\d{4}$/.test(formData.zip)) {
        errors.zip = "ZIP code must be 4 digits";
    }

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Invalid email address";
    }

    if (!formData.paymentMethod) {
        errors.paymentMethod = "Payment method is required";
    }

    if (!formData.location) {
        errors.location = "Location must be selected";
    }

    return errors;
};
