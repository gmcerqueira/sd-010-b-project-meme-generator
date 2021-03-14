const inputText = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const inputImage = document.getElementById('meme-insert');
const imageMeme = document.getElementById('meme-image');

function inputTextMeme() {
  inputText.addEventListener('keyup', () => {
    textMeme.innerHTML = inputText.value;
  });
}
inputTextMeme();

function inputImageMeme() {
  inputImage.addEventListener('change', (event) => {
    imageMeme.src = (URL.createObjectURL(event.target.files[0]));
  });
}
inputImageMeme();
