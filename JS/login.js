console.log("loging");

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const logIn = document.querySelector(".btn.login");
const registered = document.querySelector(".btn.register");
const inputs = document.querySelectorAll("input");
let checkRemember = document.getElementById("checkRemember");
let loginMail = document.getElementById("mail");
let passIcon = document.getElementById('passIcon');
let pass = document.getElementById('pass');
// let passTExt = document.getElementById('passTExt');
// passTExt.style.display='none';


registerLink.addEventListener("click", function (e) {
debugger
  e.preventDefault();
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
checkRemember.addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var user = document.getElementById("username").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ email: email, password: pass, username: user });
  localStorage.setItem("users", JSON.stringify(users));
});

registered.addEventListener("click", () => {
  window.location.href = "html/mainpage.html";
});

logIn.addEventListener("click", function () {
  var enterEmail = document.getElementById("mail").value;
  var enterPass = document.getElementById("pass").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var foundUser = users.find(function (user) {
    return user.email === enterEmail && user.password === enterPass;
  });

  if (foundUser) {
    window.location.href = "html/mainpage.html";
    clearInputs();
  } else {
    return;
  }
});

function clearInputs() {
  var inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}


passIcon.addEventListener('click',($event)=>{
$event.preventDefault($event);
  // pass.style.display = "none";
  // passTExt.style.display = "block";
  // passTExt.value = pass.value;
  console.log('password', $event);
});


