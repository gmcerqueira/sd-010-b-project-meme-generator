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
