const textInput = document.getElementById('text-input');
const textP = document.getElementById('meme-text');

textInput.addEventListener('keyup', () => {
  textP.innerHTML = textInput.value;
});

const imgId = document.getElementById('meme-image');
const inputId = document.getElementById('meme-insert');

inputId.addEventListener('change', () => {
  const reader = new FileReader();

  if (inputId.files.length <= 0) {
    return;
  }

  reader.onload = () => {
    imgId.src = reader.result;
  };

  reader.readAsDataURL(inputId.files[0]);
});
