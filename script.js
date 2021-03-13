const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');

const text = (event) => {
  memeText.textContent = event.target.value;
};

const addText = () => {
  inputText.addEventListener('keyup', text);
};

const showImg = (event) => {
  const img = document.createElement('img');
  container.appendChild(img);
  img.src = URL.createObjectURL(event.target.files[0]);
};

const insertImg = () => {
  memeInsert.addEventListener('change', showImg);
};

addText();
insertImg();
