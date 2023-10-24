document.addEventListener("DOMContentLoaded", function () {
    // Get the "Follow" button element by its class
    const followButton = document.querySelector(".btn");

    // Add a click event listener to the button
    followButton.addEventListener("click", function () {
        alert("Thank you for following!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (validateEmail(emailValue)) {
            // Valid email, you can submit the form or perform further actions here.
            alert("Thank you for subscribing!");
            // Optionally, you can reset the form
            form.reset();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
});
