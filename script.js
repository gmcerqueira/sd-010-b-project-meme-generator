// containers de Input, img e text;
const dadContent = document.body;
const inputText = document.createElement('input');
const divContainer = document.createElement('div');
const textContainer = document.createElement('div');
const imgContainer = document.createElement('img');
const inputImg = document.createElement('input');
inputImg.setAttribute('type', 'file');
inputImg.id = 'meme-insert';
imgContainer.setAttribute('type','image');
inputText.id = 'text-input';
divContainer.id = 'meme-image-container';
textContainer.id = 'meme-text';
imgContainer.id = 'meme-image';
dadContent.append(inputText);
dadContent.append(inputImg);
dadContent.append(divContainer);
divContainer.append(textContainer);
divContainer.append(imgContainer);

function showText() {
  textContainer.innerText = inputText.value;
}

inputText.addEventListener('keyup', showText);
