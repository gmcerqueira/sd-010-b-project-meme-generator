const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');

const text = (event) => {
  memeText.textContent = event.target.value;
};

const addText = () => {
  inputText.addEventListener('keyup', text);
};

const showImg = (event) => {
  const element = event.target;
  const img = document.createElement('img');
  container.appendChild(img);
  const url = URL.createObjectURL(element.files[0]);
  memeImg.src = url;
};

const insertImg = () => {
  memeInsert.addEventListener('change', showImg);
};

addText();
insertImg();
