let input=document.getElementById('text-input')
let memeText=document.getElementById('meme-text')
input.addEventListener('input',sameSentence)
function sameSentence(){
   memeText.innerHTML= input.value
}
//requisito de carregar a foto ao apertar o botão 
let fileInput=document.getElementById('meme-insert')

 function uploadImage(event) {
	var image = document.getElementById('meme-image-container');
	let url=URL.createObjectURL(event.target.files[0]);
    image.style.backgroundImage=`url(${url})`
   
}
fileInput.addEventListener('input',uploadImage)