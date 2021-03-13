const buttons = document.getElementById('buttons');
const container = document.getElementById('meme-image-container');
const textoInserido = document.getElementById('meme-text');
const texto = document.getElementById('text-input');

buttons.addEventListener('click', function (event) {
  const botaoEscolhido = event.target.id;
  if (botaoEscolhido === 'fire') {
    container.style.border = '3px dashed red';
  }
  if (botaoEscolhido === 'water') {
    container.style.border = '5px double blue';
  }
  if (botaoEscolhido === 'earth') {
    container.style.border = '6px groove green';
  }
});

//https://www.w3schools.com/jsref/event_onkeyup.asp
texto.onkeyup = function escreve(event) {
  if (event.keyCode === 13 && texto.value.length > 0) {
    textoInserido.textContent = texto.value;
    texto.value = '';
  }
};


