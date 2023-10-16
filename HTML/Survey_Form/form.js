document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");
    const closePopup = document.getElementById("closePopup");
  
    // Validation and error message display
    submitBtn.addEventListener("click", function () {
      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const dob = document.getElementById("dob");
      const country = document.getElementById("country");
      const gender = [...document.querySelectorAll('input[name="gender"]')];
      const profession = document.getElementById("profession");
      const email = document.getElementById("email");
      const mobile = document.getElementById("mobile");
  
      const firstNameError = document.getElementById("firstNameError");
      const lastNameError = document.getElementById("lastNameError");
      const dobError = document.getElementById("dobError");
      const countryError = document.getElementById("countryError");
      const genderError = document.getElementById("genderError");
      const professionError = document.getElementById("professionError");
      const emailError = document.getElementById("emailError");
      const mobileError = document.getElementById("mobileError");
  
      // Check for empty fields and display error messages
      if (firstName.value.trim() === "") {
        firstNameError.style.display = "block";
      } else {
        firstNameError.style.display = "none";
      }
  
      if (lastName.value.trim() === "") {
        lastNameError.style.display = "block";
      } else {
        lastNameError.style.display = "none";
      }
  
      if (dob.value.trim() === "") {
        dobError.style.display = "block";
      } else {
        dobError.style.display = "none";
      }
  
      if (country.value === "") {
        countryError.style.display = "block";
      } else {
        countryError.style.display = "none";
      }
  
      if (gender.every(input => !input.checked)) {
        genderError.style.display = "block";
      } else {
        genderError.style.display = "none";
      }
  
      if (profession.value.trim() === "") {
        professionError.style.display = "block";
      } else {
        professionError.style.display = "none";
      }
  
      if (email.value.trim() === "") {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }
  
      if (mobile.value.trim() === "") {
        mobileError.style.display = "block";
      } else {
        mobileError.style.display = "none";
      }
  
      if (form.checkValidity()) {
        // Build the content for the popup
        const popupHTML = `
          <p><strong>First Name:</strong> ${firstName.value}</p>
          <p><strong>Last Name:</strong> ${lastName.value}</p>
          <p><strong>Date of Birth:</strong> ${dob.value}</p>
          <p><strong>Country:</strong> ${country.value}</p>
          <p><strong>Gender:</strong> ${gender
            .filter(input => input.checked)
            .map(input => input.value)
            .join(", ")}</p>
          <p><strong>Profession:</strong> ${profession.value}</p>
          <p><strong>Email:</strong> ${email.value}</p>
          <p><strong>Mobile Number:</strong> ${mobile.value}</p>
        `;
  
        // Display the popup
        popupContent.innerHTML = popupHTML;
        popup.style.display = "block";
      }
    });
  
    closePopup.addEventListener("click", function () {
      // Close the popup and reset the form
      popup.style.display = "none";
      form.reset();
    });
  });
  