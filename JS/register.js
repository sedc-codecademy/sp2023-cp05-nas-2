   let registerBtn = document.getElementById("register-button");
registerBtn.addEventListener("click", function () {
  var registerFormContainer = document.getElementById(
    "register-form-container"
  );
  registerFormContainer.classList.toggle("hidden");
  registerBtn.style.visibility = "hidden";
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastNAme").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("First Name:" + firstName);
    console.log("Last Name: " + lastName);
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
  });
