//un-refactored code
/*const form = document.getElementById("form");
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
*/

//********re-factored code******
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

function isValidEmail(element) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(element.value).toLowerCase())) {
    //trim function can also be used here
    showSucess(element);
  } else {
    showError(element, "This email is not valid");
  }
}

function getField(name) {
  return name[0].toUpperCase() + name.slice(1);
}

function checkRequired(elementArray) {
  elementArray.map(function (element) {
    //console.log(element);
    if (element.value === "") {
      //showError(element, "Enter " + element.id + "");
      showError(element, `${getField(element.id)} is required`);
    } else {
      showSucess(element);
    }
  });
}

function checkLength(element, min, max) {
  if (element.value.length < min) {
    showError(
      element,
      `${getField(element.id)} needs to be atleast  ${min} charcters`
    );
  } else if (element.value.length > max) {
    showError(
      element,
      `${getField(element.id)} needs to be less than  ${max} charcters`
    );
  } else {
    showSucess(element);
  }
}

function confirmPasswordMatch(element1, element2) {
  if (element1.value !== element2.value) {
    showError(element2, "Password donot match");
  } else {
    showSucess(element2);
  }
}

document.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 30);
  confirmPasswordMatch(password, password2);
});
