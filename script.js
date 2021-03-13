const digitText = document.querySelector('#text-input');

let loadFile = (event) => {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}

const addText = () => {
  digitText.addEventListener('keyup', () => {
  let spanDigit = document.querySelector('#meme-text');
    spanDigit.innerHTML = digitText.value;

  })
}
addText();

