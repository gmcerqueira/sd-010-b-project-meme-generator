// Preencher caixa de texto enquanto o input é escrito

const memeText = document.querySelector('#text-input');
console.log(memeText);

function textInput() {
  const textArea = document.querySelector('#meme-text');
  console.log(textArea.innerHTML);
  textArea.innerText = memeText.value;
}

memeText.addEventListener('keyup', textInput);
