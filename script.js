let inputText = document.querySelector(' #text-input ');
const spanText = document.querySelector(' #meme-text ');
const imgContainer = document.querySelector('#meme-image-container');
const inputImg = document.querySelector('#files');
const img = document.querySelector('#img');
const fakeBtn = document.querySelector('#fake-button');


const getInputText = () => {
	let text = inputText.value;
	text = text.toUpperCase();
	spanText.innerHTML = text;
};

const inputGivenText = () => {    
	inputText.addEventListener('keyup' , () => {        
	getInputText();
	});   
};

const fakeBtnClick = () => {
	fakeBtn.addEventListener('click' , () => {
		inputImg.click();		
	})
}

window.onload = () => {  
	inputGivenText(); 
	fakeBtnClick();	
};
