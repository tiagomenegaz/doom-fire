const firePixelArray = [];
const fireWidth = 5;
const fireHeight = 5;

function start() {
  createFireDataStructure();
  createFireSource();
  renderFire();

  setInterval(calculateFirePropagation, 1000);
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight;

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelArray[i] = 0;
  }
}

function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = column + fireWidth * row;

      updateFireIntensity(pixelIndex);
    }
  }

  renderFire();
}

function updateFireIntensity(currentPixel) {
  const belowPixelIndex = currentPixel + fireWidth;

  if (belowPixelIndex >= fireWidth * fireHeight) {
    return
  }

  const decay = 1;
  const belowPixelFireIntensity = firePixelArray[belowPixelIndex];
  const newFireIntesity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0;

  firePixelArray[currentPixel] = newFireIntesity;
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>';

  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>';

    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + fireWidth * row;

      html += '<td>';
      html += `<div class="pixel-index">${pixelIndex}</div>`;
      html += firePixelArray[pixelIndex];
      html += '</td>';
    }

    html += '</tr>';
  }

  html += '</table>';
  document.querySelector('#fireCanvas').innerHTML = html;
}

function createFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight;
    const pixelIndex = (overflowPixelIndex - fireWidth) + column;

    firePixelArray[pixelIndex] = 36;
  }
}

start();
