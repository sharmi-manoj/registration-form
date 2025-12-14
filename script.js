const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");
  const submitBtn = document.getElementById("submitBtn");

  // Error message elements
  const nameErr = document.getElementById("nameError");
  const emailErr = document.getElementById("emailError");
  const passErr = document.getElementById("passwordError");

  function validateForm() {
    let valid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
      nameErr.textContent = "Name cannot be empty.";
      valid = false;
    } else {
      nameErr.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailErr.textContent = "Enter a valid email address.";
      valid = false;
    } else {
      emailErr.textContent = "";
    }

    // Password validation
    if (passInput.value.length < 6) {
      passErr.textContent = "Password must be at least 6 characters.";
      valid = false;
    } else {
      passErr.textContent = "";
    }

    // Enable/Disable submit button
    submitBtn.disabled = !valid;
    submitBtn.classList.toggle("enabled", valid);
  }

  // Real-time validation
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  passInput.addEventListener("input", validateForm);

  // Form submission
  document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });