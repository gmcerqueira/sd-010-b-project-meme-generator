const inputText = document.getElementById('text-input');
const divText = document.getElementById('meme-text');

function inputValue() {
  inputText.addEventListener('keyup', () => {
    divText.innerText = inputText.value;
  });
}
window.onload = function pageFunctions() {
  inputValue();
};
