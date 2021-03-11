window.onload = 
  requisito1();
  requisito2();

function requisito1 () {
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
  })
  divImage.style.width = '200px';
  divImage.style.height = '200px';
  divImage.style.backgroundSize = 'contain';
};

function requisito2 () {
  const input = document.createElement('input');
  input.id = 'meme-insert';
  document.getElementById('text-input').insertAdjacentElement('afterend', input);
  input.type = 'file';
  input.setAttribute('accept', 'image');
  input.addEventListener('change', function () {
    document.querySelector('#meme-image-container').appendChild(document.createElement('img'));
    document.getElementsByTagName('img')[0].src = (URL.createObjectURL(document.getElementById("meme-insert").files[0]));

  });
};
