function textoMeme() {
  const caixaTexto = document.querySelector('#text-input');
  const textoMemes = document.querySelector('#meme-text');
  caixaTexto.addEventListener('keyup', function showText() {
    textoMemes.innerHTML = caixaTexto.value;
  });
}

textoMeme();

function imagemMeme() {
  const inputImagem = document.querySelector('#meme-insert');
  const imagemMemes = document.querySelector('#meme-image');
  inputImagem.addEventListener('change', function showPicture() {
    mostraFoto(this.files);
  });

  function mostraFoto(files) {
    const leitor = new FileReader();

    leitor.onload = function leURL(event) {
      imagemMemes.src = event.target.result;
    };

    leitor.readAsDataURL(files[0]);
  }
}

imagemMeme();
