function validate() {
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("confirm").value;
  if (password1 != password2) {
    document.getElementById("msg").innerText = "Passwords do not match!";
  } else if (password1.length < 8) {
    document.getElementById("msg").innerText = "Passwords must be at least 8 characters!";
  } else {
    document.getElementById("msg").innerText = "Valid Passwords!";
  }
}
