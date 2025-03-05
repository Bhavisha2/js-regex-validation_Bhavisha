document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Validate inputs
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();

    // If all fields are valid, display success message
    if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
    }
});

function validateFullName() {
    const fullName = document.getElementById("fullname").value.trim();
    const regex = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces allowed
    if (!regex.test(fullName)) {
        displayError("fullnameError", "Full Name must contain only letters and spaces.");
        highlightInvalidField("fullname");
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    if (!regex.test(email)) {
        displayError("emailError", "Please enter a valid email address.");
        highlightInvalidField("email");
        return false;
    }
    return true;
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const regex = /^\d{10,15}$/; // Only digits, 10-15 characters
    if (!regex.test(phone)) {
        displayError("phoneError", "Phone number must be 10-15 digits.");
        highlightInvalidField("phone");
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value.trim();
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 chars, one uppercase, one lowercase, one number
    if (!regex.test(password)) {
        displayError("passwordError", "Password must be at least 8 characters long, including one uppercase letter, one lowercase letter, and one number.");
        highlightInvalidField("password");
        return false;
    }
    return true;
}

function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function highlightInvalidField(fieldId) {
    document.getElementById(fieldId).classList.add("invalid");
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => (error.textContent = ""));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("invalid"));

    document.getElementById("successMessage").textContent = "";
}
