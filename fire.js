const firePixelArray = [];
const fireWidth = 5;
const fireHeight = 5;

function start() {
  createFireDataStructure();
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
}

start();
