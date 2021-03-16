const textInput = document.getElementById('text-input');
const textP = document.getElementById('meme-text');

textInput.addEventListener('keyup', () => {
  textP.innerHTML = textInput.value;
});

const imgId = document.getElementById('meme-image');
const inputId = document.getElementById('meme-insert');

inputId.addEventListener('change', () => {
  // FileReader - Permite aplicação ler conteúdos dos arquivos do computador do usuário
  const reader = new FileReader();

  if (inputId.files.length <= 0) {
    return;
  }

  reader.onload = () => {
    // result - devolve o conteúdo do ficheiro, só e válida após a operação de leitura ser conncluída
    imgId.src = reader.result;
  };

  // readAsDataURL - usado para ler o conteúdo do 'file'
  reader.readAsDataURL(inputId.files[0]);
});
