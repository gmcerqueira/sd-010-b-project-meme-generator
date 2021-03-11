// containers de Input, img e text;
const dadContent = document.body;
const inputText = document.createElement('input');
const divContainer = document.createElement('div');
const textContainer = document.createElement('p');
inputText.id = 'text-input';
divContainer.id = 'meme-image-container';
textContainer.id = 'meme-text';
dadContent.append(inputText);
dadContent.append(divContainer);
divContainer.append(textContainer);

function showText() {
  textContainer.innerText = inputText.value;
}

inputText.addEventListener('keyup', showText);
