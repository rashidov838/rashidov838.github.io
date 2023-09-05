const userData = new URLSearchParams(window.location.search);

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let message = document.getElementById("message");
let email = document.getElementById("email");
let time = document.getElementById("time");




firstname.innerHTML = userData.get("firstname");
lastname.innerHTML = userData.get("lastname");
message.innerHTML = userData.get("message");
email.innerHTML = userData.get("email");
time.innerHTML = userData.get("time");
