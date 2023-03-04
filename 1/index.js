const button = document.querySelector(".search-btn");
const resultGif = document.getElementById('resultGif');

function searchGif() {
  const gif = document.getElementById("search");
  const gifValue = gif.value;
  const apiKey = "OhdGcw2TgLjnPFWxYEBwpTl5nEg3tPUq";
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifValue}&limit=5&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      resultGif.innerHTML = '';
      for (let i = 0; i < data.data.length; i++) {
        resultGif.innerHTML += `<div><img src="${data.data[i].images.fixed_height.url}"></div>`;
      }
    })
    .catch((error) => console.log(error));
}

button.addEventListener('click', () => {
    searchGif();
})