const textInput = document.getElementById('text-input');
const textP = document.getElementById('meme-text');

textInput.addEventListener('keyup', () => {
  textP.innerHTML = textInput.value;
});
