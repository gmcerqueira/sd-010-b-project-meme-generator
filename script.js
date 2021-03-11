//              elements
const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const containerText = document.querySelector('#meme-text');
const containerImg = document.querySelector('#meme-image');

//             listeners

// set inputText listener

const setInputText = () => {
  inputText.addEventListener('keyup', () => {
    containerText.textContent = inputText.value;
  });
};

// inputImage Load listener

const setInputImage = () => {
  inputImage.addEventListener('change', (e) => {
    containerImg.src = URL.createObjectURL(e.target.files[0]);
  });
};

// loader

const loadButtons = () => {
  setInputText();
  setInputImage();
};

window.onload = () => {
  loadButtons();
};
