document.addEventListener("DOMContentLoaded", function () {
    // Add input event listeners for real-time validation
    document.getElementById("fullname").addEventListener("input", validateFullName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("password").addEventListener("input", validatePassword);

    // Form submission handler
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
});

function validateFullName() {
    const fullName = document.getElementById("fullname").value.trim();
    const regex = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces allowed
    if (!regex.test(fullName)) {
        displayError("fullnameError", "Full Name must contain only letters and spaces.");
        highlightInvalidField("fullname");
        return false;
    } else {
        clearError("fullnameError");
        highlightValidField("fullname");
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    if (!regex.test(email)) {
        displayError("emailError", "Please enter a valid email address.");
        highlightInvalidField("email");
        return false;
    } else {
        clearError("emailError");
        highlightValidField("email");
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const regex = /^\d{10,15}$/; // Only digits, 10-15 characters
    if (!regex.test(phone)) {
        displayError("phoneError", "Phone number must be 10-15 digits.");
        highlightInvalidField("phone");
        return false;
    } else {
        clearError("phoneError");
        highlightValidField("phone");
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value.trim();
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 chars, one uppercase, one lowercase, one number
    if (!regex.test(password)) {
        displayError("passwordError", "Password must be at least 8 characters long, including one uppercase letter, one lowercase letter, and one number.");
        highlightInvalidField("password");
        return false;
    } else {
        clearError("passwordError");
        highlightValidField("password");
        return true;
    }
}

function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
    document.getElementById(elementId).textContent = "";
}

function highlightInvalidField(fieldId) {
    document.getElementById(fieldId).classList.remove("valid");
    document.getElementById(fieldId).classList.add("invalid");
}

function highlightValidField(fieldId) {
    document.getElementById(fieldId).classList.remove("invalid");
    document.getElementById(fieldId).classList.add("valid");
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => (error.textContent = ""));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.classList.remove("invalid");
        input.classList.remove("valid");
    });

    document.getElementById("successMessage").textContent = "";
}
