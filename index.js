// Create a grid of 16x16 squares.
const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.toggle('square');
  grid.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => addSquareStyle(square));

function addSquareStyle(square) {
  square.style['background-color'] = '#DEECD8';
  square.style['width'] = '40px';
  square.style['height'] = '40px';
}
