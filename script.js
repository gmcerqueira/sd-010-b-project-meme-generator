/*1 - Fazendo com que o texto digitado no input text apareça dentro do parágrafo */

textInput = document.getElementById('text-input');
divMemeText = document.getElementById('meme-text');

function insertTextInputInParagraph() {
    divMemeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', insertTextInputInParagraph);

/* Requisito 6 */
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

const memeImageContainer = document.getElementById('meme-image-container');

function changeContainerFire() {
  memeImageContainer.setAttribute('style', 'border: dashed 3px red');
}

function changeContainerWater() {
  memeImageContainer.setAttribute('style', 'border: double 5px blue');
}

function changeContainerEarth() {
  memeImageContainer.setAttribute('style', 'border: groove 6px green');
}

buttonFire.addEventListener('click', changeContainerFire)
buttonWater.addEventListener('click', changeContainerWater)
buttonEarth.addEventListener('click', changeContainerEarth)
