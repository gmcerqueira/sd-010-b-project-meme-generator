const areaDigitavel = document.getElementById('text-input');
// const fotoSelecionada = document.getElementById('input#meme-image');
const retornaTextoDigitado = document.getElementById('meme-text');
// console.log(retornaTextoDigitado + 'oi');
// console.log(fotoSelecionada + 'oi');
function inputDeEntrada() {
  const areaDigit = areaDigitavel.value;
  retornaTextoDigitado.innerHTML = areaDigit;
}
window.onload = function inicio() {
  areaDigitavel.addEventListener('input', inputDeEntrada);
  alert('Sem retorno');
};
