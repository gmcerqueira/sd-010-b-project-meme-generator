/*1 - Fazendo com que o texto digitado no input text apareça dentro do parágrafo */

textInput = document.getElementById('text-input');
divMemeText = document.getElementById('meme-text');

function insertTextInputInParagraph() {
    divMemeText.innerText = textInput.value; 
}

textInput.addEventListener('keyup', insertTextInputInParagraph);