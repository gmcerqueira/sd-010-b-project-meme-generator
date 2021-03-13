const inputText = document.querySelector('#text-input');
// const container = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

const text = (event) => {
  memeText.textContent = event.target.value;
};

const addText = () => {
  inputText.addEventListener('keyup', text);
};

addText();
