function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    // Additional validation logic can be added here

    errorMessage.textContent = ""; // Clear any previous error messages
    alert("Signup successful!"); // For demonstration purposes; in a real project, you would send the data to a server.
    return true;
}
