let textInput = document.getElementById('text-input')
let textDiv = document.getElementById('meme-text')
function setText() {
  let text = textInput.value
  textDiv.innerHTML = text
}

textInput.addEventListener("input", setText)