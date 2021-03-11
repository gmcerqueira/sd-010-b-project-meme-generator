function insertText() {
  const input = document.getElementById('text-input');
  input.addEventListener('keyup', function () {
    const text = document.getElementById('meme-text');
    text.innerText = input.value;
  })
}

insertText();

// Foi utilizado o seguinte vídeo como referência 
// para construir a função insertImage: https://www.youtube.com/watch?v=KsigKyDZTt0
function insertImage() {
  const input = document.getElementById('meme-insert');
  let file = input.files;
  if (file.length > 0) {
    let fileReader = new FileReader();
    fileReader.onload = function (event) {
    const img = document.getElementById ('meme-image');
    img.setAttribute('src', event.target.result);
    }
    fileReader.readAsDataURL(file[0]);
  }
}

insertImage ();