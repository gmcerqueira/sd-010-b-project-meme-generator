const getInputText = document.getElementById('text-input'); // captura o texto .value
const getMemeText = document.getElementById('meme-text'); // captura o texto da div

function write() {
  getMemeText.innerText = getInputText.value;
}

function create() {
  getInputText.addEventListener('keyup', write);
}

window.onload = function () {
  create();
};
