var invalidatedDiv = document.getElementById("invalidated");

var usernameElement = document.getElementById("username");
var emailElement = document.getElementById("email");
var passwordElement = document.getElementById("password");

//Creates a session storage item called "isloggedin" and assigns a value
export function setLoggedIn(value) {
  sessionStorage.setItem("isLoggedIn", value);
}

//Returns the value of "isloggedin" session storage
export function isLoggedIn() {
  return sessionStorage.getItem("isLoggedIn");
}

export function showInvalidCredentialsMessage(){
  invalidatedDiv.textContent = "Invalid Credentials";
  //Change username, email and password input border colour to red
  usernameElement.classList.add("invalidated");
  emailElement.classList.add("invalidated");
  passwordElement.classList.add("invalidated");
}

export function hideInvalidCredentialsMessage(){
  invalidatedDiv.style.display = "block";
}
