const form = document.querySelector(".form");
let email = document.getElementById("email");
let checkbox = document.getElementById("checkbox");
const postButton = document.querySelector(".button-login");
let errors = [];

function checkValidity(input) {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push("Поле " + input.placeholder + " не заполнено");
  }
  if (validity.patternMismatch) {
    errors.push("Неверный формат заполнения поля " + input.placeholder);
  }
}

function validateEmail(email) {
  let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (email.value.match(mailFormat)) {
    return true;
  } else {
    errors.push("Ваш адрес электронной почты введен неверно!");
    return false;
  }
}

function validatePassword() {
  let password = document.getElementById("password");
  let password2 = document.getElementById("password2");
  if (password.value !== password2.value) {
    errors.push("Пароли должны совпадать");
  }
}

function checkAll() {
  errors = [];
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    checkValidity(input);
  }
  // validateEmail(email);
  validatePassword(password);
  if (checkbox.checked == false) {
    errors.push("Вы должны принять условия Пользовательского соглашения");
  }
  document.querySelector("#errorMessage").innerHTML = errors.join(". <br>");
  return true;
}

postButton.addEventListener("click", function (e) {
  e.preventDefault();
  
  if (checkAll()) {
    let user = {
      userName: document.getElementById("name").value,
      email: document.getElementById("email").value,
      login: document.getElementById("login").value,
      password: document.getElementById("password").value,
      phone: document.getElementById("phone").value,
    };
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
});