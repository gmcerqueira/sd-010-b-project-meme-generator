let textInput = document.getElementById('text-input')
let textDiv = document.getElementById('meme-text')
let imgInput = document.getElementById('meme-insert')

function createEl(tagName) {
 let element = document.createElement(tagName)
 return element
}

function setBorder(event) {
  let el = event.target
  let CSSprop = window.getComputedStyle(el).getPropertyValue("border")
  let container = document.getElementById('meme-image-container')
  container.style.border = CSSprop
}

function setText() {
  let text = textInput.value
  textDiv.innerHTML = text
}

function buttonHandler() {
  let buttons = document.getElementsByTagName('button')
  for (let el of buttons){
    el.addEventListener('click', setBorder)
  }
}


function clearLastImg() {
  if (document.getElementById('meme-image')){
    document.getElementById('meme-image').remove()
  }
}
// LER O CONTEÚDO DE UM ARQUIVO:
// https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
function setImg() {
  clearLastImg()
  let el = createEl('img')
  let img = document.getElementById('meme-image-container').appendChild(el)
  img.id = 'meme-image'
  let preview = document.querySelector('#meme-image');
  let file    = document.querySelector('#meme-insert[type=file]').files[0];
  let reader  = new FileReader();
  
  reader.onloadend = function () {
    preview.src = reader.result;
  }
  
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function setSample(event) {
  clearLastImg()
  let el = event.target
  let clone = el.cloneNode(true)
  let img = document.getElementById('meme-image-container').appendChild(clone)
  img.id = 'meme-image'
}

function sampleHandler() {
  
  let samples = document.querySelectorAll('#samples img')
  samples.forEach( el => {
    el.addEventListener('click', setSample)
  })
  
}

window.onload = function init() {
  
  sampleHandler()
  buttonHandler()
  textInput.addEventListener('input', setText)
  imgInput.addEventListener('change', setImg)

}
