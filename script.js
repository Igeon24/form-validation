let allInputs = document.querySelectorAll("input");

// Attach event listeners to all inputs
allInputs.forEach((inputElement) => {
    if (inputElement.value !== "") {
        checkValidity(inputElement);
    }

    inputElement.addEventListener("change", () => {
        checkValidity(inputElement);
    });
});

// Validate individual inputs
function checkValidity(inputElement) {
    const correspondingError = document.querySelector(`.${inputElement.id}`);
    if (!inputElement.validity.valid) {
        if (correspondingError) correspondingError.style.visibility = "visible";
        inputElement.style.border = "1px solid red";
    } else {
        inputElement.style.border = "1px solid green";
        if (correspondingError) correspondingError.style.visibility = "hidden";
    }

    // Handle confirm password separately
    if (inputElement.id === "password" || inputElement.id === "cpassword") {
        confirmPasswordValidity();
    }
}

// Validate confirm password
function confirmPasswordValidity() {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#cpassword");
    const confirmPasswordError = document.querySelector(`.${confirmPassword.id}`);

    if (confirmPassword.value !== password.value) {
        if (confirmPasswordError) confirmPasswordError.style.visibility = "visible";
        confirmPassword.style.border = "1px solid red";
    } else {
        confirmPassword.style.border = "1px solid green";
        if (confirmPasswordError) confirmPasswordError.style.visibility = "hidden";
    }
}

// Validate form on submit
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
        event.preventDefault(); // Prevent submission if form is invalid
        alert("Please correct errors before submitting.");
    } else {
        alert("Form submitted successfully!");
    }
});
