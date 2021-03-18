const textInput = document.querySelector('#text-input');
const textWriter = document.querySelector('#meme-text');
const borderBtns = document.querySelector('#borderBtn-container');
const memeImgContainer = document.querySelector('#meme-image-container');

const getInputText = () => {
 let text = textInput.value; 
 textWriter.innerHTML = text;
}

const writeTextInput = () => {
	textInput.addEventListener('keyup' , () => {
		getInputText();
	})
}

const ChangeBorder = () => {
	borderBtns.addEventListener('click' , (event) => {
		let teste = event.target.className;
		if (event.target.classList.contains('btn')) {
			teste = teste.replace(/btn/gi , '');
		  memeImgContainer.style.border = teste;		  
		}
	})
}

window.onload = () => {
	writeTextInput();
	ChangeBorder();
}