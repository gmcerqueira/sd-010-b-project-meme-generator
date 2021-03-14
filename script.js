let textInput = document.getElementById('text-input')
let textDiv = document.getElementById('meme-text')
let imgInput = document.getElementById('meme-insert')
function setText() {
  let text = textInput.value
  textDiv.innerHTML = text
}

// LER O CONTEÚDO DE UM ARQUIVO:
// https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
function setImg() {
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

textInput.addEventListener('input', setText)
imgInput.addEventListener('change', setImg)
