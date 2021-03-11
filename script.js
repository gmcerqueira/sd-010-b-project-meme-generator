//              elements
const inputText = document.querySelector('#text-input');
const containerImage = document.querySelector('#meme-image-container');

//             listeners

// set inputText listener

const setInputText = () => {
  inputText.addEventListener('keydown', () => {
    containerImage.textContent = inputText.value;
  });
};

// loader

const loadButtons = () => {
  setInputText();
};

window.onload = () => {
  loadButtons();
};
