function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var result = document.getElementById("result");

  // training username & password
  if (user === "t67" && pass === "1812") {
    result.style.color = "green";
    result.innerText = "Login Successful ✅";
  } else {
    result.style.color = "red";
    result.innerText = "Wrong Username or Password ❌";
  }
}
