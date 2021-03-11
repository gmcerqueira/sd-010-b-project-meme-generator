function showText() {
  const textInput = document.querySelector('#text-input');
  const containerText = document.querySelector('#meme-text');
  containerText.innerHTML = textInput.value;
}
const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', showText);

// Adiciona imagem

const memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', () => {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(memeInsert.files[0]);
});

const container = document.querySelector('#meme-image-container');

const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});
const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', () => {
  container.style.border = '5px double blue';
});
const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});
