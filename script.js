function textoMeme() {
  const caixaTexto = document.querySelector('#text-input');
  const textoMeme = document.querySelector('#meme-text');
  caixaTexto.addEventListener('keyup', function () {
    textoMeme.innerHTML = caixaTexto.value;
  });
}

textoMeme();

function imagemMeme() {
  const inputImagem = document.querySelector('#meme-insert');
  const imagemMeme = document.querySelector('#meme-image');
  inputImagem.addEventListener('change', function () {
    mostraFoto(this.files);
  });

  function mostraFoto(files) {
      const leitor = new FileReader();

      leitor.onload = function (event) {
        imagemMeme.src = event.target.result;
      };

      leitor.readAsDataURL(files[0]);
  }
}

imagemMeme();
