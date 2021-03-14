let caixaTexto = document.querySelector('#text-input');
let textoDigitado = document.querySelector('#meme-text')

function insereTexto(){
    textoDigitado.innerHTML = caixaTexto.value;
}
caixaTexto.addEventListener('input', insereTexto)

let file = document.querySelector('#meme-insert')

// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
let loadFile = function(evento){
    let imagem = document.getElementById('meme-image')
    imagem.src = URL.createObjectURL(evento.target.files[0]);
    imagem.onload = function() {
        URL.revokeObjectURL(imagem.src)
    }
};
    
let memeImageContainer = document.getElementById('meme-image-container');

function corDaBorda(evento){
    let cor = evento.target.style.border
    memeImageContainer = cor
}

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

fire.addEventListener('click', corDaBorda)
water.addEventListener('click', corDaBorda)
earth.addEventListener('click', corDaBorda)

