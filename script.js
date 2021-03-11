const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const insertImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');

textInput.addEventListener('input', () => {
  memeText.innerHTML = textInput.value;
});

insertImg.addEventListener('change', (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
});
