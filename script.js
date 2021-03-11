// Elements

const inputText = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const imgContainer = document.querySelector('#meme-image-container');

// loadFile based on https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

const loadFile = (e) => {
  memeImg.src = URL.createObjectURL(e.target.files[0]);
  memeImg.onloadend = () => {
    URL.revokeObjectURL(memeImg.src);
    inputText.value = '';
    text.innerText = '';
  };
};

// Insert text

inputText.addEventListener('input', () => {
  text.innerText = inputText.value.toUpperCase();
});

// style container

const styleContainer = (value) => {
  imgContainer.style.border = value;
};

btnFire.addEventListener('click', () => {
  const value = '3px dashed red';
  styleContainer(value);
});
btnWater.addEventListener('click', () => {
  const value = '5px double blue';
  styleContainer(value);
});
btnEarth.addEventListener('click', () => {
  const value = '6px groove green';
  styleContainer(value);
});

loadFile();
