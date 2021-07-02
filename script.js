const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(element, message) {
  const formControl = element.parentElement;
  // formControl.className += " failure" cant use it as if iadd a  wrong thing than corrects it,failure would still be the class present;
  formControl.className = "form-control failure";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSucess(element) {
  const formControl = element.parentElement;
  // formControl.className += " success";
  formControl.className = "form-control success";
}

function isValidEmail(emaill) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emaill).toLowerCase());
}
//event listner for form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(email.value);
  if (userName.value === "") {
    showError(userName, "Please enter username");
  } else {
    showSucess(userName);
  }
  if (email.value === "") {
    showError(email, "Please enter email");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSucess(email);
  }
  if (password.value === "") {
    showError(password, "Please enter password");
  } else {
    showSucess(password);
  }
  if (password2.value === "") {
    showError(password2, "Please enter password");
  } else {
    showSucess(password2);
  }
});
