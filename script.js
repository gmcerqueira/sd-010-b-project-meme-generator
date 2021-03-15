/* function insertText() {
  
} */

function addEventTextInput() {
  const txtInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  txtInput.addEventListener('keyup', () => {
    memeText.innerText = txtInput.value;
  });
}
addEventTextInput();
