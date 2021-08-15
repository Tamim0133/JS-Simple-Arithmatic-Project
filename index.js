const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
document.getElementById("login-submit").addEventListener("click", function () {
  if (userEmail.value == "admin" && userPassword.value == "admin") {
    window.location.href = "banking.html";
  } else {
    alert("Login info Incorrect !! Enter Previous Login Info");
  }
});
