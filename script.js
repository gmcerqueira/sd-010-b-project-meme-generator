let caixaTexto = document.querySelector('#text-input');
let textoDigitado = document.querySelector('#meme-text')

function insereTexto(){
    textoDigitado.innerHTML = caixaTexto.value;
}
caixaTexto.addEventListener('input', insereTexto)

let file = document.querySelector('#meme-insert')
let caminhoImagem = document.querySelector('#meme-image')
let imagem = document.getElementsByTagName('img')

function insereImagem(){
    console.log(imagem)
    imagem[0].src = file.files.item(0).name;    
}
file.addEventListener('change', insereImagem)