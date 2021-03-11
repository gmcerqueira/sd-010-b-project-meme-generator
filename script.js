function showText() {
  const textInput = document.querySelector('#text-input');
  const containerText = document.querySelector('#meme-text');
  containerText.innerHTML = textInput.value;
}

const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', showText);
