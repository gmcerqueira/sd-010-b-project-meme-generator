const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const divText = document.getElementById('meme-text');
const image = document.getElementById('meme-image');

function inputValue() {
  inputText.addEventListener('keyup', () => {
    divText.innerText = inputText.value;
  });
}
function fillMemeImageContainer() {
  window.URL = window.URL || window.webkitURL || window.mozURL;
  inputImage.addEventListener('change', () => {
    image.src = URL.createObjectURL(inputImage.files[0]);
  });
}

window.onload = function pageFunctions() {
  inputValue();
  fillMemeImageContainer();
};
