function drawText(text) {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  context.font = '30px Arial';
  context.fillText(text, 150, 350);
}

function drawBackground(image) {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  // context.clearRect(0, 0, canvas.width, canvas.height);
  const img = image;
  console.log(img);
  context.drawImage(img, 0, 0);
}

const EL = (sel) => document.querySelector(sel);
const ctx = EL('#canvas').getContext('2d');

function readImage() {
  if (!this.files || !this.files[0]) return;
  const FR = new FileReader();
  FR.addEventListener('load', (evt) => {
    const img = new Image();
    img.addEventListener('load', () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(img, 0, 0);
    });
    img.src = evt.target.result;
  });
  FR.readAsDataURL(this.files[0]);
}

window.onload = function () {
  drawBackground(document.getElementById('background'));
  drawText('Hello!!');
};

EL('#upload-image').addEventListener('change', readImage);
