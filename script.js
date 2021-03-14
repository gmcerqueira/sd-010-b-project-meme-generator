const textInput = document.querySelector('#text-input');
const textWriter = document.querySelector('#meme-text');

const getInputText = () => {
 let text = textInput.value;
 text = text.toUpperCase();
 textWriter.innerHTML = text;
}

const writeTextInput = () => {
	textInput.addEventListener('keyup' , () => {
		getInputText();
	})
}

window.onload = () => {
	writeTextInput();
}