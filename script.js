const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('input', () => {
  memeText.innerHTML = textInput.value;
});
