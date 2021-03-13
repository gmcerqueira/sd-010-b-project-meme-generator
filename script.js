// containers de Input, img e text;
const dadContent = document.body;

const inputContainer = document.createElement('div');
const labelText = document.createElement ('label');
const inputText = document.createElement('input');
const labelImg = document.createElement ('label');
const inputImg = document.createElement('input');
inputContainer.id = 'inputs';
labelText.setAttribute('for','text-input');
labelText.innerHTML = 'Texto:';
labelImg.setAttribute('for', 'meme-insert');
labelImg.innerHTML = 'Foto:';
inputImg.setAttribute('type', 'file');
inputImg.id = 'meme-insert';
inputImg.setAttribute('accept','image');
inputText.id = 'text-input';

const divContainer = document.createElement('div');
const textContainer = document.createElement('div');
const imgContainer = document.createElement('img');
divContainer.id = 'meme-image-container';
textContainer.id = 'meme-text';
imgContainer.id = 'meme-image';
imgContainer.setAttribute('type', 'image');
dadContent.append(inputContainer);
inputContainer.append(labelText);
inputContainer.append(inputText);
inputContainer.append(labelImg);
inputContainer.append(inputImg);
dadContent.append(divContainer);
divContainer.append(textContainer);
divContainer.append(imgContainer);


inputText.onkeyup = function write() {
  if (inputText.value.length > 58) {
    alert('O limite máximo é de 60 caracteres!');
  } else {
    textContainer.textContent = inputText.value;
  }
};

window.URL = window.URL || window.webkitURL;
  inputImg.onchange = function uploadImage() {
    const urlImage = URL.createObjectURL(this.files[0]);
    imgContainer.src = urlImage;
};

