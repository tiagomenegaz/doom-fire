const firePixelArray = [];
const fireWidth = 5;
const fireHeight = 5;

function start() {
  createFireDataStructure();
  renderFire();
  console.log(firePixelArray);
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight;

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelArray[i] = 0;
  }
}

function calculateFirePropagation() {
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>';

  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>';

    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + fireWidth * row;

      html += '<td>';
      html += pixelIndex;
      html += '</td>';
    }

    html += '</tr>';
  }

  html += '</table>';
  document.querySelector('#fireCanvas').innerHTML = html;
}

start();
