function requisito1() {
  const input = document.createElement('input');
  input.id = 'text-input';
  const divImage = document.createElement('div');
  divImage.id = 'meme-image-container';
  const divTexto = document.createElement('div');
  divTexto.id = 'meme-text';
  document.body.appendChild(input);
  document.body.appendChild(divImage);
  divImage.appendChild(divTexto);
  input.addEventListener('keyup', function () {
    divTexto.innerText = input.value;
  });
  divImage.style.width = '200px';
  divImage.style.height = '200px';
  divImage.style.backgroundSize = 'contain';
}

function requisito2() {
  const input = document.createElement('input');
  //input fica apto a receber imagens
  input.id = 'meme-insert';
  document.getElementById('text-input').insertAdjacentElement('afterend', input);
  input.type = 'file';
  input.setAttribute('accept', 'image');
  //cria o elemento img antes da div do texto
  const img = document.createElement('img');
  document.querySelector('#meme-text').insertAdjacentElement('beforebegin', img);
  //imagem recebe o src do input
  input.addEventListener('change', function () {
    img.src = (URL.createObjectURL(document.getElementById('meme-insert').files[0]));
  });
}

window.onload = function carregamento() {
  requisito1();
  requisito2();
};
