const paragraph = document.getElementById('meme-text');
const text = document.getElementById('text-input');
text.onkeyup = function() {
  paragraph.textContent = text.value;
};

window.URL = window.URL || window.webkitURL || window.mozURL;
const image = document.getElementById('meme-image');
const insertImage = document.getElementById('meme-insert');
insertImage.onchange = function() {
  const urlImage = URL.createObjectURL(this.files[0]);
  console.log(urlImage);
  image.src = urlImage;
};
