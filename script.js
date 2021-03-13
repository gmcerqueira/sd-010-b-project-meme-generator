let loadFile = (event) => {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
}

let addText = function () {
  let digitText =documentQuerySelector('#text-input')

}

let espelhoText = function () {
  let espelhoTexto =document.querySelector('#meme-text')

}