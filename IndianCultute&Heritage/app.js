// app.js

// This function can be called on a button click to show an alert
function showAlert() {
    alert("Welcome to the Indian Cultural and Heritage Management System!");
}

// Add event listener to a button if you have one
document.addEventListener("DOMContentLoaded", function() {
    const welcomeButton = document.getElementById("welcomeButton");
    if (welcomeButton) {
        welcomeButton.addEventListener("click", showAlert);
    }
});
