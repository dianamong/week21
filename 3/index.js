const button = document.querySelector(".btn");
const form = document.getElementById("form");

function sendForm() {
  const userName = document.getElementById("userName").value;
  const petName = document.getElementById("petName").value;

  if (userName === "" || petName === "") {
    document.querySelector("#errorMessage").innerHTML = "Заполните обязательные поля";
} else {
    document.querySelector("#errorMessage").innerHTML = ""
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error));
  }
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  sendForm();
});
