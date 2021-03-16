document.getElementById('img-input').onchange = function() {
  let imgOutput = document.getElementById('meme-image');
  imgOutput.src = URL.createObjectURL(this.files[0]);
  imgOutput.onload = function() {
    URL.revokeObjectURL(imgOutput.src)
  }
};

let textInput = document.getElementById('text-input');

textInput.onchange = function() {
  document.getElementById('meme-text').innerText = textInput.value;
};
