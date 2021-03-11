function drawImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = document.getElementById('background');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function drawText() {
  const text = document.getElementById('text-input').value;
  console.log(text);
}

window.onload = function () {
  drawImage();
  document.getElementById('insert-text').addEventListener('click', function() {
    drawText();
  });
}