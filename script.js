const input = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');

function inputTextMeme() {
  input.addEventListener('keyup', () => {
    textMeme.innerHTML = input.value;
  });
}
inputTextMeme();
