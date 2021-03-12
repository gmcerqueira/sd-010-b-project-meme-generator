function changeBorder(color) {
  const colorChosen = color;
  const container = document.getElementById('meme-image-container');
  if (colorChosen === 'red') {
    container.style.border = '3px dashed red';
  }
  if (colorChosen === 'blue') {
    container.style.border = '5px double blue';
  }
  if (colorChosen === 'green') {
    container.style.border = '6px groove green';
  }
}

const paragraph = document.getElementById('meme-text');
const text = document.getElementById('text-input');
text.onkeyup = function () {
  if (text.value.length > 58) {
    alert('O limite máximo é de 60 caracteres!');
  } else {
    paragraph.textContent = text.value;
  }
};

window.URL = window.URL || window.webkitURL || window.mozURL;
const image = document.getElementById('meme-image');
const insertImage = document.getElementById('meme-insert');
insertImage.onchange = function () {
  const urlImage = URL.createObjectURL(this.files[0]);
  console.log(urlImage);
  image.src = urlImage;
};
