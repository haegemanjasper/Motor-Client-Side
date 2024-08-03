import zxcvbn from "zxcvbn";

export default function validateForm(formData) {
    const errors = {};
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberPattern = /^\d+$/;

    if (!formData.naam || formData.naam.trim().length === 0) {
        errors.naam = "Name cannot be empty.";
    } else if (formData.naam.length > 25) {
        errors.naam = "Name must be no more than 25 characters long.";
    } else if (!namePattern.test(formData.naam)) {
        errors.naam = "Name can only contain letters and spaces.";
    }

    if (!formData.voornaam || formData.voornaam.trim().length === 0) {
        errors.voornaam = "First name cannot be empty.";
    } else if (formData.voornaam.length > 25) {
        errors.voornaam = "First name must be no more than 25 characters long.";
    } else if (!namePattern.test(formData.voornaam)) {
        errors.voornaam = "First name can only contain letters and spaces.";
    }

    if (!emailPattern.test(formData.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!formData.straat || formData.straat.trim().length === 0) {
        errors.straat = "Street cannot be empty.";
    } else if (formData.straat.length > 25) {
        errors.straat = "Street must be no more than 25 characters long.";
    } else if (!namePattern.test(formData.straat)) {
        errors.straat = "Street can only contain letters and spaces.";
    }

    if (!formData.huisnummer || formData.huisnummer.trim().length === 0) {
        errors.huisnummer = "House number cannot be empty.";
    } else if (!numberPattern.test(formData.huisnummer)) {
        errors.huisnummer = "House number can only contain numbers.";
    }

    if (!formData.postcode || formData.postcode.trim().length === 0) {
        errors.postcode = "Postal code cannot be empty.";
    } else if (!numberPattern.test(formData.postcode)) {
        errors.postcode = "Postal code can only contain numbers.";
    }

    if (!formData.stad || formData.stad.trim().length === 0) {
        errors.stad = "City cannot be empty.";
    } else if (formData.stad.length > 25) {
        errors.stad = "City must be no more than 25 characters long.";
    } else if (!namePattern.test(formData.stad)) {
        errors.stad = "City can only contain letters and spaces.";
    }

    const passwordResult = zxcvbn(formData.password);
    if (!formData.password || formData.password.trim().length === 0) {
        errors.password = "Password cannot be empty.";
    } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
    } else if (passwordResult.score < 3) {
        errors.password =
            passwordResult.feedback.warning || "Password is too weak.";
    }

    return errors;
}
